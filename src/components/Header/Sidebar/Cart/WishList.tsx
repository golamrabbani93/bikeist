import {Drawer} from 'antd';
import SingleWishList from './SingleWishList';
import {TBike} from '../../../../types';
import {useAppSelector} from '../../../../redux/hooks';
import {getWishlistItems} from '../../../../redux/features/wishlist/wishlistSlice';

interface SideNavProps {
	openWishlist: boolean;
	setOpenWishlist: (open: boolean) => void;
}
const WishList: React.FC<SideNavProps> = ({openWishlist, setOpenWishlist}) => {
	const wishlist = useAppSelector(getWishlistItems);

	return (
		<div className="!w-[500px]">
			<Drawer
				className=" !ml-auto !bg-black text-white"
				onClose={() => setOpenWishlist(!openWishlist)}
				open={openWishlist}
				width={400}
			>
				<div className="self-stretch  flex-col justify-start items-start flex">
					<h2 className="text-xl font-bold uppercase text-White">My Wishlist</h2>

					<div className="mt-8">
						{/* !single Cart List */}
						{wishlist?.length > 0 ? (
							wishlist?.map((item: TBike) => <SingleWishList key={item._id} item={item} />)
						) : (
							<h2 className="font-bold uppercase text-primary">No Items Found</h2>
						)}
					</div>
				</div>

				{/* {carts?.length > 0 && (
					<div className="flex justify-between mx-2 mt-6">
						<h2 className="uppercase text-2xl text-white font-bold">Subtotal:</h2>
						<h2 className="uppercase text-2xl text-white font-bold">${total}</h2>
					</div>
				)} */}

				{/* {carts?.length > 0 ? (
					<div className="mt-6">
						<Link to={'/shop/cart'}>
							<ButtonFull text={'view cart'} />
						</Link>
					</div>
				) : (
					<div className="mt-6">
						<Link to={''}>
							<ButtonFull text={'Shop Now'} />
						</Link>
					</div>
				)} */}
			</Drawer>
		</div>
	);
};

export default WishList;
