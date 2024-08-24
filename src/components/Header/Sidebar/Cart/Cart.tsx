import {Drawer} from 'antd';

type TCartprops = {
	openCart: boolean;
	setOpenCart: (open: boolean) => void;
};

const Cart = ({openCart, setOpenCart}: TCartprops) => {
	return (
		<div className="!w-[700px]">
			<Drawer
				className=" !ml-auto !bg-black text-white"
				onClose={() => setOpenCart(false)}
				open={openCart}
				key={'CartDrawer'}
				width={400}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
};

export default Cart;
