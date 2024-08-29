import {Carousel, Spin} from 'antd';
import SingleBanner from './SingleBanner/SingleBanner';
import {useState} from 'react';
import {useGetAllBikeQuery} from '../../../redux/features/bike/bike.management.api';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {TBike} from '../../../types';
import {Link} from 'react-router-dom';

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
	const [seacrhValue, setSeacrhValue] = useState('');
	const [openBox, setOpenBox] = useState(false);

	const {data, isFetching, isError} = useGetAllBikeQuery([
		{name: 'searchTerm', value: seacrhValue},
		{name: 'isAvailable', value: true},
	]);

	const bikeData = data?.data as TBike[];

	const handelSeacrch: SubmitHandler<FieldValues> = (e) => {
		const value = e.target.value;
		if (value?.length > 0) {
			setOpenBox(true);
		} else {
			setOpenBox(false);
		}
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
					<div
						className={`bg-black w-full md:w-[50%]  z-50 mt-4 rounded-lg text-white ${
							!openBox && 'hidden'
						}`}
					>
						{!isError ? (
							!isFetching ? (
								<>
									<h2 className="text-2xl text-center mt-4 font-bold border-b-2 border-gray-300">
										Available Bikes
									</h2>

									{bikeData?.map((bike) => (
										<div
											key={bike._id}
											className="flex justify-between items-center p-4 bg-black text-white rounded-lg shadow-lg my-5 border mx-3 border-red-500"
										>
											<img
												src={bike.image}
												alt={bike.name}
												className="w-[80px] h-[80px] object-cover rounded-md"
											/>
											<h2 className="text-xl font-semibold ">{bike.name}</h2>
											<Link to={`bikes/${bike._id}`}>
												<button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
													View Details
												</button>
											</Link>
										</div>
									))}
								</>
							) : (
								<div className="h-[100px] flex justify-center items-center">
									<Spin size="large" />
								</div>
							)
						) : (
							<h2 className="text-center text-lg text-red-600 h-[140px] p-10 font-bold">
								No bikes found
							</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
