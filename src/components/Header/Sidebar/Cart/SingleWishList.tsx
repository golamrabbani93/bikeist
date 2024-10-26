import {Link} from 'react-router-dom';
import {removeItem} from '../../../../redux/features/wishlist/wishlistSlice';
import {useAppDispatch} from '../../../../redux/hooks';
import {TBike} from '../../../../types';

interface CartDataProps {
	item: TBike;
	openWishlist?: boolean;
	setOpenWishlist?: (open: boolean) => void;
}

const SingleWishList: React.FC<CartDataProps> = ({item, openWishlist, setOpenWishlist}) => {
	const dispatch = useAppDispatch();
	const handleRevomeItem = (id: string) => {
		dispatch(removeItem(id));
	};
	return (
		<div>
			<div className="self-stretch flex-col justify-start items-start gap-5 flex mt-4 w-full">
				<div className="self-stretch justify-between items-center flex">
					<div className="justify-between items-center flex">
						<div className="w-[88.40px] h-full pr-5 flex-col justify-start items-start inline-flex">
							<div className="self-stretch h-[80px] w-[88.40px] p-[0.80px] flex-col justify-center items-start flex ">
								<img alt="" className="w-[88.40px] h-[80px] relative" src={item.image} />
							</div>
						</div>
						<div className="flex-col justify-start items-start inline-flex ml-3">
							<div className="self-stretch h-[24.50px] flex-col justify-start items-start flex">
								<Link
									to={`/bikes/${item._id}`}
									onClick={() => openWishlist && setOpenWishlist && setOpenWishlist(!openWishlist)}
									className="text-neutral-500 text-sm font-bold  leading-normal hover:text-primary"
								>
									{item.name}
								</Link>
							</div>
							<div className="self-stretch  pr-[34.10px] flex-col justify-start items-start flex">
								<h3 className="text-neutral-500 text-sm font-normal mt-2 leading-normal text-primary">
									${item.pricePerHour} / Hour
								</h3>
							</div>
						</div>
					</div>
					{/* <div className=" border p-2 rounded-lg ">
						<BookingModal bikeData={item} rent={true} />
					</div> */}
					<div className="w-[11px] pt-[5.60px] pb-[4.90px] flex-col justify-start items-end inline-flex ml-8">
						<button
							onClick={() => handleRevomeItem(item._id)}
							className="text-right text-red-500 hover:text-red-600 cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleWishList;
