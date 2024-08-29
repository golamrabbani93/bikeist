import {ConfigProvider, Table, TableColumnsType, Tag, theme} from 'antd';

import SkeletonLoader from '../../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useAppSelector} from '../../../../../redux/hooks';
import {getCurrentTheme} from '../../../../../redux/features/theme/themeSlice';
import {useGetMyRentalsQuery} from '../../../../../redux/features/rental/rental.management.api';
import {TRental} from '../../../../../types/rental.type';
import moment from 'moment';
import PaymentModal from '../../../Payment/PaymentModal';
import {TBike} from '../../../../../types';
import {getCurrentUser} from '../../../../../redux/features/auth/authSlice';

export type TTableData = {
	key: string;
	image: string;
	totalCost: number;
	bike: TBike;
	endTime: string;
	startTime: string;
};

const BikeLIst = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const user = useAppSelector(getCurrentUser);
	const {data, isLoading, isFetching} = useGetMyRentalsQuery([
		{
			name: 'paymentStatus',
			value: 'unpaid',
		},
		{
			name: 'userId',
			value: user?.userId,
		},
	]);
	const rentalData = data?.data as TRental[];
	const tableData = rentalData?.map((rental: TRental) => {
		const {_id, bikeId, totalCost, startTime, returnTime} = rental;
		return {
			key: _id,
			image: bikeId.image,
			totalCost,
			bike: bikeId,
			endTime: returnTime,
			startTime: moment(new Date(startTime)).format('Do MMMM YYYY, h:mm A'),
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
			title: 'Name',
			key: 'bike',
			dataIndex: 'bike',
			// filters: bikeNameFilterOption,
			render: (item) => {
				return <p>{item.name}</p>;
			},
		},
		{
			title: 'Start Time',
			key: 'startTime',
			dataIndex: 'startTime',
		},
		{
			title: 'Return Time',
			key: 'endTime',
			dataIndex: 'endTime',
			render: (item) => {
				return (
					<div>
						{item === null ? (
							<Tag color="#55acee" className="uppercase">
								Upcoming
							</Tag>
						) : (
							moment(new Date(item)).format('Do MMM YY, h:mm A')
						)}
					</div>
				);
			},
		},
		{
			title: 'Total Cost',
			key: 'totalCost',
			dataIndex: 'totalCost',
		},

		{
			title: 'Make Payment',
			key: 'x',
			render: (item) => {
				return item?.totalCost === 0 ? (
					<p className="text-primary font-bold">Await Return</p>
				) : (
					<PaymentModal
						amount={item.totalCost}
						bikeDetails={item?.bike}
						paymentStatus="paid"
						startTime={item?.startTime}
						rentalId={item.key}
					/>
				);
			},
		},
	];

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
				<Table loading={isFetching} columns={columns} dataSource={tableData} pagination={false} />
			</div>
		</ConfigProvider>
	);
};

export default BikeLIst;
