import {Button, ConfigProvider, Table, TableColumnsType, TableProps, theme} from 'antd';
import {useState} from 'react';
import {TBike, TQueryParam} from '../../../../types';
import {useGetAllBikeQuery} from '../../../../redux/features/bike/bike.management.api';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import {Link} from 'react-router-dom';

export type TTableData = Pick<
	TBike,
	'name' | 'brand' | 'model' | 'year' | 'pricePerHour' | 'isAvailable'
>;

const BikeLIst = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
	const {data, isLoading, isFetching} = useGetAllBikeQuery(params);
	const bikesData = data?.data;
	console.log('🚀🚀: BikeLIst -> bikesData', bikesData);
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
		{
			title: 'Year',
			key: 'year',
			dataIndex: 'year',
			filters: bikeYearFilterOption,
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
						<Button>
							<Link to={`/user/bike-list/${item.key}`}>See Details</Link>
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

export default BikeLIst;
