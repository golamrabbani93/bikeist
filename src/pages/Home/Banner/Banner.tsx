import {Carousel} from 'antd';
import SingleBanner from './SingleBanner/SingleBanner';

const bannerData = [
	{
		image: 'https://i.ibb.co/r3GyH9P/hero-1.jpg',
		quote: 'Flexible Rental Options',
		description: 'Enjoy convenient hourly, daily, and weekly rentals that fit your schedule',
	},
	{
		image: 'https://i.ibb.co/KDPkP2P/hero-2.jpg',
		quote: 'Affordable Rates',
		description:
			'Get the best value with transparent pricing and no surprise charges—rent with confidence and ease.',
	},
	{
		image: 'https://i.ibb.co/rZ7pJB6/hero-3.jpg',
		quote: 'Explore Anywhere, Anytime',
		description:
			'Discover new routes and hidden gems with our GPS-enabled bikes, available for rent 24/7.',
	},
];

const Banner = () => {
	return (
		<div className="text-white relative">
			<Carousel dotPosition="right" autoplay>
				{bannerData.map((item, index) => {
					return <SingleBanner key={index} data={item} />;
				})}
			</Carousel>
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full   absolute top-[85%]  xl:top-[80%] left-0 px-4">
					<input
						type="text"
						className="w-full md:w-[50%] h-[50px] border rounded-l border-white outline-none px-4 text-white bg-transparent focus:border-primary transition-all duration-500"
						placeholder="Search Bike"
					/>
					<button className="btn bg-primary hover:bg-secondary rounded-r-md h-[50px] px-2 uppercase text-white font-bold ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 md:size-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
