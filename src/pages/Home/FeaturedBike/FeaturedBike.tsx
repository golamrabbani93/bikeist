import './FeaturedBike.css';
import {useGetAllBikeQuery} from '../../../redux/features/bike/bike.management.api';
import Slider from 'react-slick';
import {TBike} from '../../../types';

import CardLoader from './Loader';
import SingleBike from '../../../components/SingleBike/SingleBike';

const FeaturedBike = () => {
	const {data, isLoading} = useGetAllBikeQuery([{name: 'isAvailable', value: true}]);

	const bikes = data?.data;

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		initialSlide: 0,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					initialSlide: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div
			className="py-16 bg-gradient-to-r from-secondary via-primary to-secondary text-white overflow-hidden"
			id="fBike"
		>
			<div className="">
				<div className="container mx-auto mb-8">
					<h2 className="uppercase text-4xl font-extrabold ml-4 text-white text-center">
						Featured Bikes
					</h2>
				</div>

				<div className="container mx-auto mb-8 overflow-hidden">
					{/* f bike Card Start */}
					{isLoading && (
						<div className=" flex justify-center gap-4">
							{[1, 2, 3, 4].map((item) => (
								<CardLoader key={item} />
							))}
						</div>
					)}
					{!isLoading && (
						<Slider {...settings}>
							{bikes?.map((bike: TBike) => (
								<SingleBike key={bike._id} bike={bike} />
							))}
						</Slider>
					)}
					{/* f bike Card End */}
				</div>
			</div>
		</div>
	);
};

export default FeaturedBike;
