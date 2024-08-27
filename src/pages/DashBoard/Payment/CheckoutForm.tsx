import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';
import {TBike} from '../../../types';
import {useAppSelector} from '../../../redux/hooks';
import {getCurrentUser} from '../../../redux/features/auth/authSlice';

const CheckoutForm = ({amount, bikeData}: {amount: number; bikeData: TBike}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, SetCardError] = useState('');
	const [processing, setProcessing] = useState(false);
	// * get Payment Secret
	const [clientSecret, setClientSecret] = useState('');
	const user = useAppSelector(getCurrentUser);
	console.log('🚀🚀: CheckoutForm -> user', user);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('http://localhost:5000/api/create-payment-intent', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({price: amount}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [amount]);

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			SetCardError(error.message as string);
		} else {
			SetCardError('');
			setProcessing(true);
			console.log('[PaymentMethod]', paymentMethod);
		}
		const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: user?.userId,
					email: user?.userEmail,
				},
			},
		});

		if (confirmError) {
			console.log(confirmError);
		} else {
			console.log('🚀🚀: paymentIntent', paymentIntent);
		}
	};

	return (
		<div className="w-[400px]">
			<h2 className=" text-white p-4 text-xl font-bold uppercase mb-5">Payment with Card</h2>
			<form onSubmit={handleSubmit}>
				<CardElement
					className="border p-4"
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#fff',
								'::placeholder': {
									color: '#fff',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>

				<button
					disabled={!stripe || !clientSecret}
					type="submit"
					className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300"
				>
					Pay Now
				</button>
			</form>
			{cardError && <p className="text-red-500 mt-2">{cardError}</p>}
		</div>
	);
};

export default CheckoutForm;
