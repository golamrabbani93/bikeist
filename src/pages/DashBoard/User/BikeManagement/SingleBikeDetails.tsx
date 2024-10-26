import {useNavigate, useParams} from 'react-router-dom';
import {useGetABikeQuery} from '../../../../redux/features/bike/bike.management.api';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useState} from 'react';
import {ConfigProvider, Modal, theme} from 'antd';
import {TBike} from '../../../../types';
import BikeistForm from '../../../../components/form/BikeistForm';
import BikeistDatePicker from '../../../../components/form/BikeistDatePicker';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {bookingSchema} from '../../../../schemas/booking/booking.schema';
import {zodResolver} from '@hookform/resolvers/zod/src/zod.js';
import useScrollTop from '../../../../hooks/useScrollTop';
import {Link} from 'react-router-dom';
import {getCurrentUser} from '../../../../redux/features/auth/authSlice';

const SingleBikeDetails = () => {
	useScrollTop();
	const {id} = useParams();

	const {data, isLoading} = useGetABikeQuery(id);
	const bikeData = data?.data;

	if (isLoading) {
		return <SkeletonLoader />;
	}
	return (
		<div className="relative">
			<div
				className="min-h-screen bg-cover bg-center py-12 px-4"
				style={{backgroundImage: `url(${bikeData?.image})`}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-70"></div>
				<div className="relative max-w-5xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-white border-opacity-30 mt-20">
					<div className="grid grid-cols-1 md:grid-cols-2 ">
						{/* Bike Image */}
						<img
							src={bikeData?.image}
							alt="Bike"
							className="rounded-xl shadow-lg w-[300px] h-[330px]"
						/>

						{/* Bike Details */}
						<div className="flex flex-col justify-between">
							<div>
								<h2 className="text-4xl font-bold text-white mb-4">{bikeData?.name}</h2>
								<p className="text-lg text-white mb-6">{bikeData?.description}</p>

								<ul className="text-white space-y-2">
									<li>
										<strong>Price:</strong> ${bikeData?.pricePerHour} per day
									</li>
									<li>
										<strong>CC:</strong> {bikeData?.cc} CC
									</li>
									<li>
										<strong>Year:</strong> {bikeData?.year}
									</li>
									<li>
										<strong>Brand:</strong> {bikeData?.brand}
									</li>
									<li>
										<strong>Availability: </strong>
										{bikeData?.isAvailable ? 'Available' : 'Not Available'}
									</li>
								</ul>
							</div>
							<div className="flex gap-3">
								<Link to={'/bikes/comparison'}>
									<button className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300">
										Comparison Bike
									</button>
								</Link>
								<BookingModal bikeData={bikeData as TBike} rent={false} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const BookingModal = ({bikeData, rent}: {bikeData: TBike; rent: boolean}) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	//get user
	const user = useAppSelector(getCurrentUser);
	const showModal = () => {
		setOpen(true);
	};
	const handleSubmit: SubmitHandler<FieldValues> = (data) => {
		const bookingData = {
			startTime: data.startTime,
			bikeData,
		};
		// Redirect to payment page with advanced payment of Tk 100
		navigate('/payment', {state: {amount: 100, bikeData: bookingData}});
	};

	const handleCancel = () => {
		setOpen(false);
	};

	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	return (
		<>
			{rent ? (
				<button
					disabled={!bikeData.isAvailable}
					onClick={showModal}
					className="text-white hover:text-primary font-bold uppercase transition duration-500 cursor-pointer"
				>
					Rent Now
				</button>
			) : (
				<button
					disabled={!bikeData.isAvailable}
					onClick={showModal}
					className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300"
				>
					{bikeData.isAvailable ? 'Book Now' : 'Already Booked'}
				</button>
			)}

			<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
				<Modal open={open} title={`${bikeData?.name}`} onCancel={handleCancel} footer={[]}>
					<div className="mt-2">
						{user === null ? (
							<Link to="/login" className="text-red-500 hover:text-red-700 text-xl">
								You need to login first
							</Link>
						) : (
							<BikeistForm onSubmit={handleSubmit} resolver={zodResolver(bookingSchema)}>
								<BikeistDatePicker name="startTime" label="Select Booking Start Time" />
								<button className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300 w-full">
									Pay Now
								</button>
							</BikeistForm>
						)}
					</div>
				</Modal>
			</ConfigProvider>
		</>
	);
};
export default SingleBikeDetails;
