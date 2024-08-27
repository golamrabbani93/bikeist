import {useParams} from 'react-router-dom';
import {useGetABikeQuery} from '../../../../redux/features/bike/bike.management.api';
import SkeletonLoader from '../../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {useState} from 'react';
import {Modal} from 'antd';
import {TBike} from '../../../../types';

const SingleBikeDetails = () => {
	const {id} = useParams();
	console.log('🚀🚀: SingleBikeDetails -> id', id);

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
				<div className="relative max-w-5xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-white border-opacity-30">
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

							<BookingModal bikeData={bikeData as TBike} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const BookingModal = ({bikeData}: {bikeData: TBike}) => {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<button
				onClick={showModal}
				className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300"
			>
				Book Now
			</button>
			<Modal
				open={open}
				title={`${bikeData?.name}Bike Book Now`}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<button
						className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300 w-full"
						onClick={handleOk}
					>
						Pay Now
					</button>,
				]}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};
export default SingleBikeDetails;
