import moment from 'moment';
import {useLocation} from 'react-router-dom';
import PaymentModal from './PaymentModal';
import DiscountSpinner from '../Discount/DiscountSpinner';
import {useState} from 'react';

const Payment = () => {
	const location = useLocation();
	const {amount, bikeData} = location.state || {};
	const bikeDetails = bikeData?.bikeData;
	const startTime = bikeData?.startTime;
	const modifyDate = moment(new Date(startTime)).format(' Do MMMM YYYY, h:mm A');

	const [discount, setDiscount] = useState<number | undefined>(undefined);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
		const discountCode = e.target.value; // Access the value directly

		if (!discountCode) {
			// Handle the case where the discount code is empty or undefined
			console.log('Discount code is empty or undefined');
			setDiscount(undefined);
			return;
		}

		console.log(discountCode);

		// Slice the last two digits only if discountCode is defined and has a sufficient length
		const lastTwoDigits = parseInt(discountCode.slice(-2), 10);

		// Update the discount state with the extracted number
		setDiscount(lastTwoDigits);
	};
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary to-gray-900 flex items-center justify-center p-4">
			<div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-8 w-full max-w-md my-20">
				<h1 className="text-3xl font-bold text-white text-center mb-8 uppercase">
					Advanced Payment
				</h1>

				{/* Payment Summary */}
				<div className="bg-white/20 p-4 rounded-lg mb-6">
					<h2 className="text-xl text-white mb-2">Booking Summary</h2>
					<p className="text-gray-300">Bike: {bikeDetails?.name}</p>
					<p className="text-gray-300">Start Time:{modifyDate}</p>
					<p className="text-gray-300">Amount: ${amount}</p>
				</div>

				{/* Payment Method Selection */}
				<div className="bg-white/20 p-4 rounded-lg mb-6">
					<h3 className="text-lg text-white mb-4">Spin for Discount</h3>
					<div className=" w-full">
						<DiscountSpinner />
					</div>
				</div>
				<div className="bg-white/20 p-4 rounded-lg mb-6">
					<h3 className="text-lg text-white mb-4">Coupon Code</h3>
					<div className="w-full">
						<input
							onChange={(e) => handleCoupon(e)}
							type="text"
							className="w-full  h-[50px] border rounded-l border-white outline-none px-4 text-white bg-transparent focus:border-primary transition-all duration-500"
							placeholder="Coupon Code"
						/>
					</div>
				</div>
				<PaymentModal
					discount={discount}
					amount={amount}
					bikeDetails={bikeDetails}
					startTime={startTime}
				/>
			</div>
		</div>
	);
};

export default Payment;
