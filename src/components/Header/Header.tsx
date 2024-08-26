import './Header.css';
import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getCurrentUser, logOut} from '../../redux/features/auth/authSlice';
import {getCurrentTheme, toggleTheme} from '../../redux/features/theme/themeSlice';
const Header = () => {
	// * Get Cirrent Logged in user
	const user = useAppSelector(getCurrentUser);
	const dispatch = useAppDispatch();
	// *menu Open
	const [openHam, setOpenHam] = useState(false);
	// *Theme Management
	const theme = useAppSelector(getCurrentTheme);
	// *handle Theme
	const handleTheme = () => {
		dispatch(toggleTheme());
	};
	// *user Log Out
	const handleLogOut = () => {
		dispatch(logOut());
	};
	return (
		<div className="container relative mx-auto header">
			<div className="absolute top-10 ">
				<div className="container mx-auto">
					<div className=" flex ">
						<div className="flex items-center ml-10 z-10">
							<div>{/* <img src={'https://i.ibb.co/McvXSTK/logo.png'} alt="" /> */}</div>
						</div>
						<div className="ham flex z-50 items-center  bg-primary  md:h-[80px] px-4 rounded-2xl">
							<div className="cursor-pointer ">
								{user?.userId ? (
									<button
										className="text-white text-2xl font-extrabold uppercase"
										onClick={handleLogOut}
									>
										LogOut
									</button>
								) : (
									<Link className="text-white text-2xl font-extrabold" to={'/login'}>
										LOGIN
									</Link>
								)}
							</div>
							<div>
								{/* Sun Ion */}
								<svg
									onClick={handleTheme}
									className={`h-7 md:h-[40px] md:w-[40px] text-white mx-4 cursor-pointer ${
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
									className={`h-7 md:h-[40px] md:w-[40px] text-white mx-4 cursor-pointer ${
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
							<svg
								onClick={() => setOpenHam(!openHam)}
								className={` hamRotate ham1   2xl:right-[10%] ${
									openHam && 'active'
								} h-10 md:h-[70px] md:w-[70px]`}
								viewBox="0 0 100 100"
							>
								<path
									className="line top"
									d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
								></path>
								<path className="line middle" d="m 30,50 h 40"></path>
								<path
									className="line bottom"
									d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className={` navigation flex ${openHam ? `show` : ''} z-30`} id="home">
				<div className="left pl-[2rem] md:pl-[5rem] pt-[4rem] ">
					<nav className="menu text-start">
						<ul className="mt-10 ">
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<NavLink onClick={() => setOpenHam(!openHam)} to={'/'} end>
									home
								</NavLink>
							</li>
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<NavLink onClick={() => setOpenHam(!openHam)} to={'/about-us'}>
									About Us
								</NavLink>
							</li>
							{user?.userId && (
								<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
									<NavLink onClick={() => setOpenHam(!openHam)} to={`/${user?.role}/dashboard`}>
										Dashboard
									</NavLink>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
