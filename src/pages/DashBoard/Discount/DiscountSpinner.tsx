import {useState} from 'react';
import {Modal} from 'antd';
import {Wheel} from 'react-custom-roulette';
import {toast} from 'sonner';

const DiscountSpinner = () => {
	const [open, setOpen] = useState(false);
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winningDiscount, setWinningDiscount] = useState<string | null>(null);
	const [couponCode, setCouponCode] = useState<string | null>(null);

	const data = [
		{option: '10%', style: {backgroundColor: '#FF5733', textColor: 'white'}, code: 'DISCOUNT10'},
		{option: '20%', style: {backgroundColor: '#33C1FF', textColor: 'white'}, code: 'DISCOUNT20'},
		{option: '30%', style: {backgroundColor: '#FFC300', textColor: 'black'}, code: 'DISCOUNT30'},
	];

	const handleSpinClick = () => {
		const randomPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(randomPrizeNumber);
		setMustSpin(true);
	};

	const handleSpinComplete = () => {
		setWinningDiscount(data[prizeNumber].option);
		setCouponCode(data[prizeNumber].code);

		setMustSpin(false);
	};

	const handleCopyCode = () => {
		if (couponCode) {
			navigator.clipboard
				.writeText(couponCode)
				.then(() => {
					toast.success('Copied to Clipboard');
					setOpen(false);
				})
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				.catch((_err) => alert('Failed to copy coupon code'));
		}
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all w-full"
			>
				Spin Now
			</button>

			<Modal
				title="Spin the Wheel and Win a Discount!"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				width={800}
				footer={null}
			>
				<div className="flex flex-col items-center">
					<Wheel
						mustStartSpinning={mustSpin}
						prizeNumber={prizeNumber}
						data={data}
						backgroundColors={['#3e3e3e', '#df3428']}
						textColors={['#ffffff']}
						onStopSpinning={handleSpinComplete}
					/>

					{!mustSpin && (
						<button
							onClick={handleSpinClick}
							className="mt-6 py-2 px-6 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all"
						>
							Spin the Wheel
						</button>
					)}

					{winningDiscount && !mustSpin && (
						<div className="mt-4 text-xl font-bold text-green-600">
							🎉 You won {winningDiscount} off! 🎉
							<div className="mt-2 text-lg text-center">
								<button
									onClick={handleCopyCode}
									className="ml-4 py-1 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
								>
									Copy Code
								</button>
							</div>
						</div>
					)}
				</div>
			</Modal>
		</>
	);
};

export default DiscountSpinner;
