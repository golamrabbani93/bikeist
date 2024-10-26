import './Header.css';
import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getCurrentUser, logOut} from '../../redux/features/auth/authSlice';
import Logo from './Logo';
import {BsSuitHeart} from 'react-icons/bs';
import {Badge} from 'antd';
import WishList from './Sidebar/Cart/WishList';
import {getWishlistItems} from '../../redux/features/wishlist/wishlistSlice';
const Header = () => {
	// * Get Cirrent Logged in user
	const user = useAppSelector(getCurrentUser);
	const wishlist = useAppSelector(getWishlistItems);
	const dispatch = useAppDispatch();
	// *menu Open
	const [openHam, setOpenHam] = useState(false);
	//open wishlist
	const [openWishlist, setOpenWishlist] = useState(false);
	// *user Log Out
	const handleLogOut = () => {
		dispatch(logOut());
	};
	return (
		<div className="container relative mx-auto header">
			<div className="absolute top-10 w-full">
				<div className="container mx-auto relative">
					<div className="flex items-center flex-col sm:flex-row">
						<div className="flex items-center ml-10 z-10 -mt-8 sm:-mt-0">
							<Link to={'/'}>
								<Logo />
							</Link>
						</div>
						<div className="ham flex z-50 items-center fixed  bg-primary  md:h-[60px] px-4 rounded-2xl mt-12 sm:mt-0">
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

							{/* Sun Ion */}
							<button
								className={`tooltip tooltip-left mx-2 transition duration-500 text-3xl font-bold mt-2`}
							>
								<Badge
									color="white"
									count={wishlist?.length || 0}
									style={{color: '#e2211c', fontWeight: 'bold'}}
								>
									<BsSuitHeart
										onClick={() => setOpenWishlist(!openWishlist)}
										className="text-white tooltip tooltip-left mx-2 transition duration-500 text-3xl font-bold "
									></BsSuitHeart>
								</Badge>
							</button>

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

			<div className={` navigation flex ${openHam ? `show` : ''} z-30 pt-10 sm:pt-0`} id="home">
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
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<NavLink onClick={() => setOpenHam(!openHam)} to={'/contact-us'}>
									Contact Us
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
				<WishList openWishlist={openWishlist} setOpenWishlist={setOpenWishlist} />
			</div>
		</div>
	);
};

export default Header;
