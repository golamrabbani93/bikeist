import {ConfigProvider, Table, TableColumnsType, Tag, theme} from 'antd';
import SkeletonLoader from '../../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useAppSelector} from '../../../../../redux/hooks';
import {getCurrentTheme} from '../../../../../redux/features/theme/themeSlice';

import {useGetMyRentalsQuery} from '../../../../../redux/features/rental/rental.management.api';
import {TRental} from '../../../../../types/rental.type';
import moment from 'moment';
import {getCurrentUser} from '../../../../../redux/features/auth/authSlice';

export type TTableData = Pick<TRental, 'startTime' | 'totalCost' | 'returnTime'>;

const PaidTabs = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const user = useAppSelector(getCurrentUser);
	const {data, isLoading, isFetching} = useGetMyRentalsQuery([
		{
			name: 'paymentStatus',
			value: 'paid',
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
			name: bikeId.name,
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
			title: 'Name',
			key: 'name',
			dataIndex: 'name',
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
			title: 'Total Cost',
			key: 'totalCost',
			dataIndex: 'totalCost',
			render(item) {
				return <div>{`$${item}`}</div>;
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

export default PaidTabs;
