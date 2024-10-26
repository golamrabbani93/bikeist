import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {TBike} from '../../types';
import {addItem, getWishlistItems, removeItem} from '../../redux/features/wishlist/wishlistSlice';
import {Link} from 'react-router-dom';
import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs';
import {BookingModal} from '../../pages/DashBoard/User/BikeManagement/SingleBikeDetails';

interface SingleBikeProps {
	bike: TBike;
}
const SingleBike = ({bike}: SingleBikeProps) => {
	const [isWishList, setIsWishList] = useState(false);
	const dispatch = useAppDispatch();
	const wishListItems: TBike[] = useAppSelector(getWishlistItems);
	// !set active wishlist product Icon

	useEffect(() => {
		const isWishList = wishListItems?.some((item) => item._id === bike._id);
		setIsWishList(isWishList ?? false);
	}, [bike._id, wishListItems]);

	// !change icon for add wishListItem
	// !add WishList item to local storage
	const handleWishList = (bike: TBike) => {
		if (isWishList) {
			dispatch(removeItem(bike._id));
		} else {
			dispatch(addItem(bike));
		}
	};
	return (
		<div className="flex justify-center">
			<div className="new-card card-compact !w-56 md:!w-72 mt-8  mx-3  bg-white/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
				<div className="relative overflow-hidden">
					<Link to={`/shop/product`}>
						<img className=" md:h-[300px] rounded-lg" src={bike.image} alt={bike.name} />
					</Link>

					<div className="action-link">
						<div>
							{/* <Link to={''}> */}

							<BookingModal bikeData={bike as TBike} rent={true} />
							{/* </label> */}
							{/* </Link> */}
						</div>
						<div>
							<button
								onClick={() => handleWishList(bike)}
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
						<Link to={`/bikes/${bike._id}`} className="hover:text-primary transition duration-300">
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
	);
};

export default SingleBike;
