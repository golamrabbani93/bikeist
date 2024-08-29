import {Carousel} from 'antd';
import SingleBanner from './SingleBanner/SingleBanner';
import {useState} from 'react';
import {useGetAllBikeQuery} from '../../../redux/features/bike/bike.management.api';
import {FieldValues, SubmitHandler} from 'react-hook-form';

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
	const [seacrhValue, setSeacrhValue] = useState('a');
	const {data} = useGetAllBikeQuery([{name: 'searchTerm', value: seacrhValue}]);
	console.log('🚀🚀: Banner -> data', data);
	const handelSeacrch: SubmitHandler<FieldValues> = (e) => {
		const value = e.target.value;
		setSeacrhValue(value);
	};

	return (
		<div className="text-white relative">
			<Carousel dotPosition="right" autoplay>
				{bannerData.map((item, index) => {
					return <SingleBanner key={index} data={item} />;
				})}
			</Carousel>
			<div className="container mx-auto">
				<div className="flex justify-center items-center  flex-col w-full   absolute top-[85%]  xl:top-[80%] left-0 px-4">
					<input
						onChange={(e) => handelSeacrch(e)}
						type="text"
						className="w-full md:w-[50%] h-[50px] border rounded-l border-white outline-none px-4 text-white bg-transparent focus:border-primary transition-all duration-500"
						placeholder="Search Bike"
					/>
					<div className="bg-red-500 w-full md:w-[50%] h-[500px] z-50 hidden"></div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
