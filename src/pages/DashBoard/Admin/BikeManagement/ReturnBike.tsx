import {Button, ConfigProvider, Table, TableColumnsType, TableProps, Tag, theme} from 'antd';
import {TRental} from '../../../../types/rental.type';
import {
	useGetMyRentalsQuery,
	useReturnBikeMutation,
} from '../../../../redux/features/rental/rental.management.api';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import moment from 'moment';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {toast} from 'sonner';
import {TQueryParam, TResponse} from '../../../../types';
import {useState} from 'react';

export type TTableData = Pick<TRental, 'startTime' | 'totalCost' | 'returnTime'>;

const PaidTabs = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

	const {data, isLoading, isFetching} = useGetMyRentalsQuery(params, {pollingInterval: 15000});
	const [returnBike] = useReturnBikeMutation();
	const rentalData = data?.data as TRental[];
	const tableData = rentalData?.map((rental: TRental) => {
		const {_id, bikeId, totalCost, startTime, returnTime, userId, advance, discount, payment} =
			rental;
		return {
			key: _id,
			image: bikeId.image,
			bikeName: bikeId.name,
			userName: userId.name,
			userEmail: userId.email,
			userPhone: userId.phone,
			totalCost,
			returnTime,
			startTime,
			advance,
			discount,
			payment,
		};
	});

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
			title: 'Bike Name',
			key: 'bikeName',
			dataIndex: 'bikeName',
		},
		{
			title: 'User Name',
			key: 'userName',
			dataIndex: 'userName',
		},

		{
			title: 'Start Time',
			key: 'startTime',
			dataIndex: 'startTime',
			render: (item) => {
				return moment(new Date(item)).format('Do MMM YY, h:mm A');
			},
		},
		{
			title: 'Return Time',
			key: 'returnTime',
			dataIndex: 'returnTime',
			render: (item) => {
				return (
					<div>
						{item === null ? (
							<Tag color="#55acee">Upcoming</Tag>
						) : (
							moment(new Date(item)).format('Do MMM YY, h:mm A')
						)}
					</div>
				);
			},
		},
		{
			title: 'Advance',
			key: 'advance',
			dataIndex: 'advance',
		},
		{
			title: 'Discount',
			key: 'discount',
			dataIndex: 'discount',
			render: (item) => {
				return <div>{item === 0 ? <Tag color="#55acee">Upcoming</Tag> : item}</div>;
			},
		},

		{
			title: 'Total Cost',
			key: 'totalCost',
			dataIndex: 'totalCost',
			render: (item) => {
				return <div>{item === 0 ? <Tag color="#55acee">Upcoming</Tag> : item}</div>;
			},
		},
		{
			title: 'Payment',
			key: 'payment',
			dataIndex: 'payment',
			render: (item) => {
				return (
					<div>
						{item > 0 ? (
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
					text: 'Paid',
					value: 'paid',
				},
				{
					text: 'UnPaid',
					value: 'unpaid',
				},
			],
		},
		{
			title: 'Action',
			key: 'x',
			render: (item) => {
				return (
					<Button disabled={item.totalCost} onClick={() => handleCalculate(item)} type="primary">
						Calculate
					</Button>
				);
			},
		},
	];

	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	const handleCalculate: SubmitHandler<FieldValues> = async (item) => {
		console.log('🚀🚀: PaidTabs -> item', item.key);
		const toastId = toast.loading('Bike Returning...');

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await returnBike(item.key)) as TResponse<any>;

		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Bike Return Successful', {id: toastId, duration: 2000});
		}
	};

	if (isLoading) {
		return <SkeletonLoader />;
	}
	const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
		if (extra.action === 'filter') {
			const queryParams: TQueryParam[] = [];

			filters.payment?.forEach((item) => queryParams.push({name: 'paymentStatus', value: item}));

			setParams(queryParams);
		}
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div className="dark">
				<Table
					loading={isFetching}
					columns={columns}
					dataSource={tableData}
					pagination={false}
					onChange={onChange}
				/>
			</div>
		</ConfigProvider>
	);
};

export default PaidTabs;
