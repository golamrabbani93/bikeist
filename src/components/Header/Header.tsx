import './Header.css';
import {useState} from 'react';
import Cart from './Sidebar/Cart/Cart';
import {Link, NavLink} from 'react-router-dom';
const Header = () => {
	const [openHam, setOpenHam] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	return (
		<div className="container relative mx-auto">
			<div className="absolute top-10 ">
				<div className="container mx-auto">
					<div className=" flex ">
						<div className="flex items-center ml-10 z-10">
							<div>
								<img src={'https://i.ibb.co/McvXSTK/logo.png'} alt="" />
							</div>
						</div>
						<div className="ham flex z-50 items-center  bg-primary  md:h-[80px] px-4 rounded-2xl">
							<div className="cursor-pointer ">
								<Link className="text-white text-2xl font-extrabold" to={'/login'}>
									LOGIN
								</Link>
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
								<NavLink to={'/'} end>
									home
								</NavLink>
							</li>
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<NavLink to={'/about-us'}>About Us</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Cart openCart={openCart} setOpenCart={setOpenCart} />
		</div>
	);
};

export default Header;
