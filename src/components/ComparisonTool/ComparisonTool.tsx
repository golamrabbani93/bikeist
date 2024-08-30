import {useState} from 'react';
import {useGetAllBikeQuery} from '../../redux/features/bike/bike.management.api';
import MainLoader from '../Loader/MainLoader/MainLoader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {TBike} from '../../types';

const ComparisonTool = () => {
	const {data, isLoading} = useGetAllBikeQuery(undefined);
	const bikeData = data?.data;
	const [comparisonList, setComparisonList] = useState<TBike[]>([]);

	const toggleCompare = (bike: TBike) => {
		if (comparisonList.includes(bike)) {
			setComparisonList(comparisonList.filter((item) => item._id !== bike._id));
		} else {
			setComparisonList([...comparisonList, bike]);
		}
	};
	if (isLoading) {
		return <MainLoader />;
	}
	return (
		<>
			<Header />
			<div className="bg-gradient-to-r from-primary to-primary text-black py-[100px]">
				<div className="py-8 container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-12 text-white uppercase">
						Side-by-Side Bike Comparison
					</h2>

					{/* Bike Cards */}
					<div className="mx-10">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							{bikeData?.map((bike) => (
								<div
									key={bike._id}
									className="relative p-6 rounded-lg shadow-2xl backdrop-blur-lg bg-gradient-to-t from-white/10 to-white/30 border border-white/30 transition-transform transform hover:scale-105 duration-500 ease-in-out"
								>
									<div className="">
										<img
											src={bike.image}
											alt={bike.name}
											className="w-full h-56 object-cover rounded-md mb-6"
										/>
										{/* <div className="absolute inset-0 bg-black/40 rounded-md"></div> */}
									</div>
									<h3 className="text-2xl font-semibold mb-3 text-black">{bike.name}</h3>
									<p className="text-lg text-black mb-1">Brand: {bike.brand}</p>

									<p className={`text-white font-semibold`}>
										{bike.isAvailable ? 'Available' : 'Not Available'}
									</p>
									<button
										onClick={() => toggleCompare(bike)}
										className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:bg-gradient-to-l transition-colors duration-500"
									>
										{comparisonList.includes(bike) ? 'Remove from Comparison' : 'Add to Comparison'}
									</button>
								</div>
							))}
						</div>
					</div>

					{/* Comparison Table */}
					{comparisonList.length > 0 && (
						<div className="mt-16">
							<h3 className="text-3xl font-semibold text-center mb-8 text-white uppercase">
								Comparison Table
							</h3>
							<div className="overflow-x-auto">
								<table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden backdrop-blur-lg">
									<thead>
										<tr>
											<th className="px-6 py-4 text-left font-semibold bg-gray-200 text-black">
												Name
											</th>
											{comparisonList.map((bike) => (
												<th
													key={bike._id}
													className="px-6 py-4 text-center font-semibold bg-gray-200 text-black"
												>
													{bike.name}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-6 py-4 border-b font-semibold text-black">Model</td>
											{comparisonList.map((bike) => (
												<td key={bike._id} className="px-6 py-4 border-b text-center text-black">
													{bike.model}
												</td>
											))}
										</tr>
										<tr>
											<td className="px-6 py-4 border-b font-semibold text-black">Price</td>
											{comparisonList.map((bike) => (
												<td key={bike._id} className="px-6 py-4 border-b text-center text-black">
													${bike.pricePerHour}
												</td>
											))}
										</tr>
										<tr>
											<td className="px-6 py-4 border-b font-semibold text-black">Brand</td>
											{comparisonList.map((bike) => (
												<td key={bike._id} className="px-6 py-4 border-b text-center text-black">
													{bike.brand}
												</td>
											))}
										</tr>
										<tr>
											<td className="px-6 py-4 border-b font-semibold text-black">CC</td>
											{comparisonList.map((bike) => (
												<td key={bike._id} className="px-6 py-4 border-b text-center text-black">
													{bike.cc}
												</td>
											))}
										</tr>

										<tr>
											<td className="px-6 py-4 border-b font-semibold text-black">Available</td>
											{comparisonList.map((bike) => (
												<td key={bike._id} className={`px-6 py-4 border-b text-center text-black`}>
													{bike.isAvailable ? 'Available' : 'Not Available'}
												</td>
											))}
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ComparisonTool;
