import {Button, ConfigProvider, Table, TableColumnsType, TableProps, theme} from 'antd';
import {useState} from 'react';
import {TBike, TQueryParam} from '../../../../types';
import {useGetAllBikeQuery} from '../../../../redux/features/bike/bike.management.api';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';

export type TTableData = Pick<
	TBike,
	'name' | 'brand' | 'model' | 'year' | 'pricePerHour' | 'isAvailable'
>;

const BikeLIst = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
	const {data: bikesData, isLoading, isFetching} = useGetAllBikeQuery(params);

	const tableData = bikesData?.data?.map(
		({_id, name, brand, model, year, pricePerHour, isAvailable}) => ({
			key: _id,
			name,
			brand,
			model,
			year,
			pricePerHour,
			isAvailable,
		}),
	);

	const columns: TableColumnsType<TTableData> = [
		{
			title: 'Name',
			key: 'name',
			dataIndex: 'name',
			filters: [
				{
					text: 'Autumn',
					value: 'Autumn',
				},
				{
					text: 'Fall',
					value: 'Fall',
				},
				{
					text: 'Summer',
					value: 'Summer',
				},
			],
		},
		{
			title: 'Brand',
			key: 'brand',
			dataIndex: 'brand',
			filters: [
				{
					text: 'Autumn',
					value: 'Autumn',
				},
				{
					text: 'Fall',
					value: 'Fall',
				},
				{
					text: 'Summer',
					value: 'Summer',
				},
			],
		},
		{
			title: 'Model',
			key: 'model',
			dataIndex: 'model',
			filters: [
				{
					text: 'Autumn',
					value: 'Autumn',
				},
				{
					text: 'Fall',
					value: 'Fall',
				},
				{
					text: 'Summer',
					value: 'Summer',
				},
			],
		},
		{
			title: 'Price Per Hour',
			key: 'pricePerHour',
			dataIndex: 'pricePerHour',
			filters: [
				{
					text: 'Autumn',
					value: 'Autumn',
				},
				{
					text: 'Fall',
					value: 'Fall',
				},
				{
					text: 'Summer',
					value: 'Summer',
				},
			],
		},
		{
			title: 'Year',
			key: 'year',
			dataIndex: 'year',
			filters: [
				{
					text: '2024',
					value: '2024',
				},
				{
					text: '2025',
					value: '2025',
				},
				{
					text: '2026',
					value: '2026',
				},
			],
		},

		{
			title: 'Action',
			key: 'x',
			render: () => {
				return (
					<div>
						<Button>Update</Button>
					</div>
				);
			},
		},
	];

	const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
		if (extra.action === 'filter') {
			const queryParams: TQueryParam[] = [];

			filters.name?.forEach((item) => queryParams.push({name: 'name', value: item}));

			filters.year?.forEach((item) => queryParams.push({name: 'year', value: item}));

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
