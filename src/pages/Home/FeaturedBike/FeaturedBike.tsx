import {useState} from 'react';
import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import './FeaturedBike.css';
import {useGetAllBikeQuery} from '../../../redux/features/bike/bike.management.api';
import Slider from 'react-slick';
import {TBike} from '../../../types';

import CardLoader from './Loader';

const FeaturedBike = () => {
	const {data, isLoading} = useGetAllBikeQuery([{name: 'isAvailable', value: true}]);
	// const isLoading = true;
	const bikes = data?.data;
	// !change icon for add wishListItem
	const [isWishList, setIsWishList] = useState(false);
	// !add WishList item to local storage
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleWishList = (_id: string) => {
		setIsWishList(!isWishList);
	};
	// !set active wishlist product Icon
	// useEffect(() => {
	// 	const isWishList = wishListItems?.includes(data?._id);
	// 	setIsWishList(isWishList);
	// }, [data?._id, wishListItems]);
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
								<div key={bike._id}>
									<div className="flex justify-center">
										<div className="new-card card-compact !w-56 md:!w-72 mt-8  mx-3  bg-white/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
											<div className="relative overflow-hidden">
												<Link to={`/shop/product`}>
													<img
														className=" md:h-[300px] rounded-lg"
														src={bike.image}
														alt={bike.name}
													/>
												</Link>

												<div className="action-link">
													<div>
														<Link to={''}>
															<label
																// onClick={() => handleAddCart(data)}
																className="text-white hover:text-primary font-bold uppercase transition duration-500 cursor-pointer"
																htmlFor="success-modal"
															>
																Rent Now
															</label>
														</Link>
													</div>
													<div>
														<button
															onClick={() => handleWishList(bike._id)}
															className={`${
																isWishList ? 'text-primary' : ' text-white hover:text-primary'
															} tooltip tooltip-left mx-2 transition duration-500 text-xl`}
															data-tip={`${isWishList ? 'Remove from' : 'Add to'} wishlist`}
														>
															{isWishList ? (
																<BsSuitHeartFill className="rounded-none"></BsSuitHeartFill>
															) : (
																<BsSuitHeart></BsSuitHeart>
															)}
														</button>
													</div>
												</div>

												<h2 className="text-xs font-bold py-[2px] px-1 absolute top-[10px] left-[10px] text-primary-focus uppercase bg-primary">
													{bike.brand}
												</h2>
											</div>
											<div className="p-2">
												<div className="mt-3 flex justify-between items-center">
													<Link
														to={`/bikes/${bike._id}`}
														className="hover:text-primary transition duration-300"
													>
														<h2 className="card-title text-xl font-bold">{bike.name}</h2>
													</Link>
													<span className="font-bold">CC:{bike.cc}</span>
												</div>
												<div className="price-rating flex justify-between">
													{/* <Rating rating={data?.rating}></Rating> */}
													<div className="price mr-3">
														<span className="font-bold ">Price Per Hour: ${bike.pricePerHour}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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
