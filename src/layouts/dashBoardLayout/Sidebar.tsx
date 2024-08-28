import {Layout, Menu} from 'antd';
import {useAppSelector} from '../../redux/hooks';
import {getCurrentUser} from '../../redux/features/auth/authSlice';
import {userPaths} from '../../routes/user.routes';
import sidebarGenerator from '../../utils/sidebarGenerator';
import {Link} from 'react-router-dom';
import {MenuItemType} from '../../types';
const {Sider} = Layout;
const userRole = {
	ADMIN: 'admin',
	USER: 'user',
};

const Sidebar = () => {
	const user = useAppSelector(getCurrentUser);

	let sidebarItems;
	switch (user!.role) {
		case userRole.USER:
			sidebarItems = sidebarGenerator(userPaths, userRole.USER);
			break;
		case userRole.ADMIN:
			sidebarItems = sidebarGenerator(userPaths, userRole.ADMIN);
			break;

		default:
			break;
	}
	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={(broken) => {
				console.log(broken);
			}}
			style={{height: '100vh', position: 'sticky', top: '0', left: '0'}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
		>
			<div className="demo-logo-vertical" />
			<div
				style={{
					color: 'white',
					fontSize: '3rem',
					fontWeight: 'bold',
					textAlign: 'center',
					margin: '2rem 0 2rem 0',
				}}
			>
				<Link className="hover:text-primary" to="/">
					BIKEIST
				</Link>
			</div>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['4']}
				items={sidebarItems as MenuItemType[]}
			/>
		</Sider>
	);
};

export default Sidebar;
