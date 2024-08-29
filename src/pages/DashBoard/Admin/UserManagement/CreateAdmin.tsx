import {Button, ConfigProvider, Table, TableColumnsType, theme} from 'antd';

import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';

import {FieldValues, SubmitHandler} from 'react-hook-form';
import {toast} from 'sonner';
import {TResponse} from '../../../../types';

import {
	useGetAllUserQuery,
	useMakeAdminMutation,
} from '../../../../redux/features/user/user.management.api';
import {TUserData} from '../../../../types/user.type';
export type TTableData = Pick<TUserData, 'name' | 'email' | 'role' | 'phone'>;

const CreateAdmin = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [makeAdmin] = useMakeAdminMutation();
	const {data, isLoading, isFetching} = useGetAllUserQuery(undefined);

	const tableData = data?.data?.map((user: TUserData) => {
		const {_id, name, role, email, phone} = user;
		return {
			key: _id,
			name,
			email,
			role,
			phone,
		};
	});

	const columns: TableColumnsType<TTableData> = [
		{
			title: 'Name',
			key: 'name',
			dataIndex: 'name',
		},
		{
			title: 'Email',
			key: 'email',
			dataIndex: 'email',
		},
		{
			title: 'Phone',
			key: 'phone',
			dataIndex: 'phone',
		},
		{
			title: 'Role',
			key: 'role',
			dataIndex: 'role',
		},

		{
			title: 'Action',
			key: 'x',
			render: (item) => {
				return (
					<Button
						disabled={item.role == 'admin'}
						onClick={() => handleCalculate(item)}
						type="primary"
					>
						Make Admin
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
		const toastId = toast.loading('Admin Making...');

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await makeAdmin(item.key)) as TResponse<any>;

		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Admin Making Successful', {id: toastId, duration: 2000});
		}
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

export default CreateAdmin;
