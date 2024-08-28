import {Button, ConfigProvider, Modal, Table, TableColumnsType, TableProps, theme} from 'antd';
import {useState} from 'react';
import {TBike, TQueryParam} from '../../../../types';
import {
	useGetABikeQuery,
	useGetAllBikeQuery,
} from '../../../../redux/features/bike/bike.management.api';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import BikeistForm from '../../../../components/form/BikeistForm';
import BikeistInput from '../../../../components/form/BikeistInput';
import {FieldValues, SubmitHandler} from 'react-hook-form';

export type TTableData = Pick<
	TBike,
	'name' | 'brand' | 'model' | 'year' | 'pricePerHour' | 'isAvailable'
>;

const BikeLIst = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
	const {data, isLoading, isFetching} = useGetAllBikeQuery(params, {pollingInterval: 15000});
	const bikesData = data?.data;
	const tableData = bikesData?.map(
		({_id, image, name, brand, model, year, pricePerHour, isAvailable}) => ({
			key: _id,
			image,
			name,
			brand,
			model,
			year,
			pricePerHour,
			isAvailable,
		}),
	);

	// *Bike Name Filter Option
	const bikeNameFilterOption = bikesData?.map((bike: TBike) => ({
		text: bike.name,
		value: bike.name,
	}));
	// *Bike Brand Filter Option
	const bikeBrandFilterOption = bikesData?.map((bike: TBike) => ({
		text: bike.brand,
		value: bike.brand,
	}));
	// *Bike Model Filter Option
	const bikeModelFilterOption = bikesData?.map((bike: TBike) => ({
		text: bike.model,
		value: bike.model,
	}));
	// *Bike Year Filter Option
	const bikeYearFilterOption = Array.from(new Set(bikesData?.map((bike: TBike) => bike.year))).map(
		(year) => ({
			text: year,
			value: year,
		}),
	);

	const columns: TableColumnsType<TTableData> = [
		{
			title: 'Image',
			key: 'image',
			dataIndex: 'image',
			render: (item) => {
				return (
					<div>
						<img className="w-[100px] h-[100px]" src={item} alt="" />
					</div>
				);
			},
		},
		{
			title: 'Name',
			key: 'name',
			dataIndex: 'name',
			filters: bikeNameFilterOption,
		},
		{
			title: 'Brand',
			key: 'brand',
			dataIndex: 'brand',
			filters: bikeBrandFilterOption,
		},
		{
			title: 'Model',
			key: 'model',
			dataIndex: 'model',
			filters: bikeModelFilterOption,
		},
		{
			title: 'Price Per Hour',
			key: 'pricePerHour',
			dataIndex: 'pricePerHour',
		},
		true && {
			title: 'Year',
			key: 'year',
			dataIndex: 'year',
			filters: bikeYearFilterOption,
			render: () => null,
		},
		{
			title: 'Availability',
			key: 'isAvailable',
			dataIndex: 'isAvailable',
			render: (item) => {
				return (
					<div>
						{item ? (
							<svg
								className="w-[25px] text-center m-auto text-green-600"
								data-slot="icon"
								fill="none"
								strokeWidth="1.5"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
							</svg>
						) : (
							<svg
								className="w-[25px] text-center m-auto text-red-600"
								data-slot="icon"
								fill="none"
								strokeWidth="1.5"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
							</svg>
						)}
					</div>
				);
			},
			filters: [
				{
					text: 'Available',
					value: true,
				},
				{
					text: 'Not Available',
					value: false,
				},
			],
		},

		{
			title: 'Action',
			key: 'x',
			render: (item) => {
				return (
					<div>
						<UpdateModal bikeData={item} />

						<Button className="ml-2" danger type="primary">
							<MdDelete />
							Delete
						</Button>
					</div>
				);
			},
		},
	];

	const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
		if (extra.action === 'filter') {
			const queryParams: TQueryParam[] = [];

			filters.name?.forEach((item) => queryParams.push({name: 'name', value: item}));
			filters.model?.forEach((item) => queryParams.push({name: 'model', value: item}));
			filters.brand?.forEach((item) => queryParams.push({name: 'brand', value: item}));
			filters.year?.forEach((item) => queryParams.push({name: 'year', value: item}));
			filters.isAvailable?.forEach((item) => queryParams.push({name: 'isAvailable', value: item}));

			setParams(queryParams);
		}
	};
	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	if (isLoading) {
		return <SkeletonLoader />;
	}
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div className="dark">
				<Table
					loading={isFetching}
					columns={columns}
					dataSource={tableData}
					onChange={onChange}
					pagination={false}
				/>
			</div>
		</ConfigProvider>
	);
};

const UpdateModal = ({bikeData}: {bikeData: TBike & {key: string}}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {data} = useGetABikeQuery(bikeData?.key);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const defaultValues = {
		name: bikeData.name,
		image: bikeData.image,
		model: bikeData.model,
		brand: bikeData.brand,
		pricePerHour: bikeData.pricePerHour,
		description: data?.data?.description,
	};

	//* update
	const handleUpdate: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<>
			<Button type="primary" onClick={showModal}>
				<FaEdit className="" />
				Update
			</Button>
			<Modal
				title="Update Bike Data"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[]}
			>
				<div className="mt-6">
					<BikeistForm onSubmit={handleUpdate} defaultValues={defaultValues}>
						<BikeistInput label="Name" name="name" key="name" type="text" />
						<BikeistInput label="Image" name="image" key="image" type="text" />
						<BikeistInput label="Model" name="model" key="model" type="text" />
						<BikeistInput label="Brand" name="brand" key="brand" type="text" />
						<BikeistInput
							label="Price Per Hour"
							name="pricePerHour"
							key="pricePerHour"
							type="text"
						/>
						<BikeistInput
							label="Description"
							name="description"
							key="description"
							type="textarea"
						/>
						<div className="ml-auto">
							<Button htmlType="submit" className=" w-full" type="primary" onClick={showModal}>
								<FaEdit />
								Update
							</Button>
						</div>
					</BikeistForm>
				</div>
			</Modal>
		</>
	);
};

export default BikeLIst;
