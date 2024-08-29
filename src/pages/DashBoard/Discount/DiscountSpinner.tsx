import {useState} from 'react';
import {Modal} from 'antd';
import {Wheel} from 'react-custom-roulette';
import {toast} from 'sonner';
import {useGetAllCouponsQuery} from '../../../redux/features/coupon/couponManagement.api';
import {TCoupon} from '../../../types/coupon.type';
type WheelData = {
	option: string;
	style: {
		backgroundColor: string;
		textColor: string;
	};
	code: string;
};
const DiscountSpinner = () => {
	const [open, setOpen] = useState(false);
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [winningDiscount, setWinningDiscount] = useState<string | null>(null);
	const [couponCode, setCouponCode] = useState<string | null>(null);
	const {data: couponData, isLoading} = useGetAllCouponsQuery([{name: 'isActive', value: true}]);

	const defaultWheelData: WheelData[] = [];
	const mappedData: WheelData[] =
		couponData?.data?.map((coupon: TCoupon) => {
			return {
				option: `${coupon.code?.slice(-2)}%`,
				style: {backgroundColor: `#${coupon._id?.slice(-5)}2`, textColor: 'white'},
				code: coupon.code,
			};
		}) || defaultWheelData;

	const handleSpinClick = () => {
		if (mappedData && mappedData.length > 0) {
			const randomPrizeNumber = Math.floor(Math.random() * mappedData.length);
			setPrizeNumber(randomPrizeNumber);
			setMustSpin(true);
		} else {
			toast.error('No coupons available to spin.');
		}
	};

	const handleSpinComplete = () => {
		if (mappedData && mappedData.length > 0 && prizeNumber !== undefined) {
			setWinningDiscount(mappedData[prizeNumber].option);
			setCouponCode(mappedData[prizeNumber].code);
			setMustSpin(false);
		} else {
			console.error('Mapped data is not available or invalid prize number.');
			toast.error('coupons Data Processing.');
		}
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
		<div>
			<button
				onClick={() => setOpen(true)}
				className="py-2 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all w-full"
			>
				Spin Now
			</button>

			<div>
				<Modal
					title="Spin the Wheel and Win a Discount!"
					centered
					open={open}
					onOk={() => setOpen(false)}
					onCancel={() => setOpen(false)}
					footer={null}
					width={800}
					className="overflow-hidden overflow-x-hidden overflow-y-hidden"
				>
					<div className="flex flex-col items-center">
						<div className="">
							<Wheel
								mustStartSpinning={mustSpin}
								prizeNumber={prizeNumber}
								data={mappedData}
								backgroundColors={['#3e3e3e', '#df3428']}
								textColors={['#ffffff']}
								onStopSpinning={handleSpinComplete}
							/>
						</div>

						{!mustSpin && (
							<button
								disabled={isLoading}
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
			</div>
		</div>
	);
};

export default DiscountSpinner;
