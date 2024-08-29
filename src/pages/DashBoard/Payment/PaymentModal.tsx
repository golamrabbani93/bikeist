import {useState} from 'react';
import CheckoutForm from './CheckoutForm';
import {ConfigProvider, Modal, theme} from 'antd';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {TBike} from '../../../types';

const PaymentModal = ({
	amount,
	bikeDetails,
	paymentStatus,
	startTime,
	rentalId,
	discount,
}: {
	discount?: number;
	amount: number;
	bikeDetails: TBike;
	paymentStatus?: string;
	startTime?: string;
	rentalId?: string;
}) => {
	const [open, setOpen] = useState(false);
	// console.log({bikeDetails, amount, paymentStatus, rentalId});
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
						<CheckoutForm
							amount={amount}
							bikeDetails={bikeDetails}
							setOpen={setOpen}
							startTime={startTime}
							paymentStatus={paymentStatus}
							rentalId={rentalId}
							discount={discount}
						/>
					</Elements>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default PaymentModal;
