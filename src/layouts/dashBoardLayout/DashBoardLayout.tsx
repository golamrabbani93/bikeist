import {Layout} from 'antd';
import {Link, Outlet} from 'react-router-dom';
import {FaHome, FaSignOutAlt} from 'react-icons/fa';
import {useAppDispatch} from '../../redux/hooks';
import {logOut} from '../../redux/features/auth/authSlice';
import {toast} from 'sonner';
import Sidebar from './Sidebar';
import useScrollTop from '../../hooks/useScrollTop';
const {Header, Content, Footer} = Layout;

const DashBoardLayout = () => {
	useScrollTop();
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logOut());
		toast.success('Logged out', {duration: 2000});
	};
	return (
		<Layout style={{height: '100%'}}>
			<Sidebar />

			<Layout>
				<Header style={{padding: '0 auto'}}>
					<nav className="w-[20%] ml-auto">
						<ul className="flex justify-between items-center max-w-4xl mx-auto">
							{/* Home */}
							<Link
								to={'/'}
								className=" text-white flex items-center space-x-2 cursor-pointer hover:text-primary transition font-bold"
							>
								<FaHome className="text-xl" />
								<span>Home</span>
							</Link>

							{/* Logout */}
							<li
								onClick={handleLogout}
								className="text-white flex items-center space-x-2 cursor-pointer hover:text-primary transition font-bold"
							>
								<FaSignOutAlt className="text-xl" />
								<span>Logout</span>
							</li>
						</ul>
					</nav>
				</Header>
				<Content>
					<div
						style={{
							minHeight: 360,
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{textAlign: 'center'}}>
					<h2 className=" uppercase text-sm">
						© {new Date().getFullYear()} Bikeist. Made by{' '}
						<Link to={`https://webrabbani.web.app/`} className="text-primary">
							Golam rabbani
						</Link>
					</h2>
				</Footer>
			</Layout>
		</Layout>
	);
};

export default DashBoardLayout;
