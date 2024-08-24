import './Header.css';
import logo from '../../assets/images/logo.png';
import {useState} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import cartAnData from '../../assets/animation/cart.json';
import Cart from './Sidebar/Cart/Cart';
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
								<img src={logo} alt="" />
							</div>
							{/* <div className="ml-3">
								<h2 className="md:text-4xl font-bold">ICT Division</h2>
								<h4 className="md:"> Government of the People's Republic of Bangladesh </h4>
							</div> */}
						</div>
						<div className="ham flex z-50 items-center  bg-primary  md:h-[80px] px-4 rounded-2xl">
							{/* <svg
								className={` hamRotate ham1   2xl:right-[10%]  h-7 md:10 md:h-[50px] md:w-[50px] mr-2`}
								data-slot="icon"
								fill="none"
								stroke-width="1.5"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								></path>
							</svg> */}
							<div className="cursor-pointer " onClick={() => setOpenCart(!openCart)}>
								<Player
									autoplay
									loop
									src={cartAnData}
									// style={{width: '120px'}}

									className="overflow-hidden w-[70px] md:w-[120px]"
								></Player>
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
								<a className="!text-primary">home</a>
							</li>
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<a>Institution</a>
							</li>

							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<a>Project</a>
							</li>
							<li className="block text-4xl sm:text-5xl md:text-[60px] xl:text-[90px] leading-[60px] md:leading-[90px] xl:leading-[130px]">
								<a>Gallery</a>
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
