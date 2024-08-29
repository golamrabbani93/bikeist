import {Button, ConfigProvider, Table, TableColumnsType, Tag, theme} from 'antd';
import {TRental} from '../../../../types/rental.type';
import {useGetMyRentalsQuery} from '../../../../redux/features/rental/rental.management.api';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import moment from 'moment';
import {FieldValues, SubmitHandler} from 'react-hook-form';

export type TTableData = Pick<TRental, 'startTime' | 'totalCost' | 'returnTime'>;

const PaidTabs = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);

	const {data, isLoading, isFetching} = useGetMyRentalsQuery([
		{
			name: 'paymentStatus',
			value: 'unpaid',
		},
	]);
	const rentalData = data?.data as TRental[];
	const tableData = rentalData?.map((rental: TRental) => {
		const {_id, bikeId, totalCost, startTime, returnTime, userId} = rental;
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
				return <div>{item === null ? <Tag color="#55acee">Upcoming</Tag> : item}</div>;
			},
		},
		{
			title: 'Advance',
			key: 'returnTime',
			dataIndex: 'returnTime',
			render: (item) => {
				return <div>{item === null ? <Tag color="#55acee">Upcoming</Tag> : item}</div>;
			},
		},
		{
			title: 'Discount',
			key: 'returnTime',
			dataIndex: 'returnTime',
			render: (item) => {
				return <div>{item === null ? <Tag color="#55acee">Upcoming</Tag> : item}</div>;
			},
		},

		{
			title: 'Total Cost',
			key: 'totalCost',
			dataIndex: 'totalCost',
		},
		{
			title: 'Action',
			key: 'x',
			render: (item) => {
				return (
					<Button onClick={() => handleCalculate(item)} type="primary">
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

	const handleCalculate: SubmitHandler<FieldValues> = (item) => {
		console.log(item);
	};

	if (isLoading) {
		return <SkeletonLoader />;
	}
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div className="dark">
				<Table loading={isFetching} columns={columns} dataSource={tableData} pagination={false} />
			</div>
		</ConfigProvider>
	);
};

export default PaidTabs;
