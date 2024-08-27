import {Layout} from 'antd';
import {Link, Outlet} from 'react-router-dom';
import {FaHome, FaSignOutAlt} from 'react-icons/fa';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {logOut} from '../../redux/features/auth/authSlice';
import {toast} from 'sonner';
import Sidebar from './Sidebar';
import useScrollTop from '../../hooks/useScrollTop';
import {getCurrentTheme, toggleTheme} from '../../redux/features/theme/themeSlice';
const {Header, Content, Footer} = Layout;

const DashBoardLayout = () => {
	useScrollTop();
	// *theme Management
	const theme = useAppSelector(getCurrentTheme);

	const dispatch = useAppDispatch();

	// *Log Out
	const handleLogout = () => {
		dispatch(logOut());
		toast.success('Logged out', {duration: 2000});
	};
	// *handle Theme
	const handleTheme = () => {
		dispatch(toggleTheme());
	};
	return (
		<div className="sideNav " style={{background: 'rgba(0,0,0,0.0)'}}>
			<Layout style={{height: '100%'}}>
				<Sidebar />

				<Layout>
					<Header style={{padding: '0 auto'}}>
						<nav className="w-[20%]">
							<ul className="flex justify-between items-center max-w-4xl mx-auto">
								{/* Home */}
								<Link
									to={'/'}
									className=" text-white flex items-center space-x-2 cursor-pointer hover:text-primary transition font-bold"
								>
									<FaHome className="text-xl" />
									<span>Home</span>
								</Link>
								<div>
									{/* Sun Ion */}
									<svg
										onClick={handleTheme}
										className={`h-7 md:h-[25px] md:w-[40px] text-white mx-4 cursor-pointer ${
											theme === 'light' && 'hidden'
										}`}
										data-slot="icon"
										fill="none"
										strokeWidth="1.5"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
										></path>
									</svg>
								</div>
								<div>
									{/* Moon Icon */}
									<svg
										onClick={handleTheme}
										className={`h-7 md:h-[25px] md:w-[40px] text-white mx-4 cursor-pointer ${
											theme === 'dark' && 'hidden'
										}`}
										data-slot="icon"
										fill="none"
										strokeWidth="1.5"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
										></path>
									</svg>
								</div>
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
								minHeight: 0,
							}}
						>
							<Outlet />
						</div>
					</Content>
					<Footer style={{textAlign: 'center'}} className="bg-[#001529]">
						<h2 className=" text-white uppercase text-sm">
							© {new Date().getFullYear()} Bikeist. Made by{' '}
							<Link to={`https://webrabbani.web.app/`} className="text-primary">
								Golam rabbani
							</Link>
						</h2>
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
};

export default DashBoardLayout;
