import {Button, Layout} from 'antd';
import {Outlet} from 'react-router-dom';

import {useAppDispatch} from '../../redux/hooks';
import {logOut} from '../../redux/features/auth/authSlice';
import {toast} from 'sonner';
import Sidebar from './Sidebar';
const {Header, Content, Footer} = Layout;

const DashBoardLayout = () => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logOut());
		toast.success('Logged out', {duration: 2000});
	};
	return (
		<Layout style={{height: '100%'}}>
			<Sidebar />

			<Layout>
				<Header>
					<Button onClick={handleLogout}>Log Out</Button>
				</Header>
				<Content style={{margin: '24px 16px 0'}}>
					<div
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{textAlign: 'center'}}>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default DashBoardLayout;
