import {ConfigProvider, Modal, theme} from 'antd';
import moment from 'moment';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm, {TBikeData} from './CheckoutForm';

const Payment = () => {
	const location = useLocation();
	const {amount, bikeData} = location.state || {};
	const bikeDetails = bikeData?.bikeData;
	const startTime = bikeData?.startTime;
	const modifyDate = moment(new Date(startTime)).format(' Do MMMM YYYY, h:mm A');

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
					<p className="text-gray-300">Amount Due: ${amount}</p>
				</div>

				{/* Payment Method Selection */}
				<div className="bg-white/20 p-4 rounded-lg mb-6">
					<h3 className="text-lg text-white mb-4">Select Payment Method</h3>
					<div className="grid grid-cols-2 gap-4">
						<button className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
							Stripe
						</button>

						<button className="py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
							Bkash
						</button>
					</div>
				</div>
				<PaymentModal amount={amount} bikeData={bikeData} />
			</div>
		</div>
	);
};
const PaymentModal = ({amount, bikeData}: {amount: number; bikeData: TBikeData}) => {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const stripeSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY;

	const handleCancel = () => {
		setOpen(false);
	};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	// * payment mathod start
	const stripePromise = loadStripe(stripeSecretKey);
	return (
		<>
			<button
				onClick={showModal}
				className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300 w-full"
			>
				Pay $100
			</button>
			<ConfigProvider theme={darkTheme}>
				<Modal open={open} onCancel={handleCancel} footer={[]}>
					<Elements stripe={stripePromise}>
						<CheckoutForm amount={amount} bikeData={bikeData} setOpen={setOpen} />
					</Elements>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default Payment;
