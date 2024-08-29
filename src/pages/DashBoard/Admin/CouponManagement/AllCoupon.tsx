import {ConfigProvider, Table, TableColumnsType, Tag, theme} from 'antd';
import {TCoupon} from '../../../../types/coupon.type';
import {useGetAllCouponsQuery} from '../../../../redux/features/coupon/couponManagement.api';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';

export type TTableData = Pick<TCoupon, 'code' | 'isActive'>;

const AllCoupon = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);

	const {data, isLoading, isFetching} = useGetAllCouponsQuery(undefined);
	const couponData = data?.data;
	const tableData = couponData?.map((rental: TCoupon) => {
		const {_id, code, isActive} = rental;
		return {
			key: _id,
			code,
			isActive,
		};
	});

	const columns: TableColumnsType<TTableData> = [
		{
			title: 'Code',
			key: 'code',
			dataIndex: 'code',
		},

		{
			title: 'Coupon Status',
			key: 'isActive',
			dataIndex: 'isActive',
			render: (item) => {
				return (
					<div>
						{item ? <Tag color="#00FF00">Active</Tag> : <Tag color="#FF0000">Not Active</Tag>}
					</div>
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
				<Table
					className="text-center"
					loading={isFetching}
					columns={columns}
					dataSource={tableData}
					pagination={false}
				/>
			</div>
		</ConfigProvider>
	);
};

export default AllCoupon;
