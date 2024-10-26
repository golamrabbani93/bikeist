import {Link} from 'react-router-dom';

import './Brands.css';

import MainLoader from '../../../components/Loader/MainLoader/MainLoader';

import {TBrand} from '../../../types/brand.type';
import {useGetAllBrandQuery} from '../../../redux/features/Brand/brand.management.api';

const Brands = () => {
	const {data, isLoading} = useGetAllBrandQuery('');

	if (isLoading) {
		return <MainLoader />;
	}
	return (
		<div
			className="pt-16 bg-gradient-to-r from-secondary via-primary to-secondary text-white"
			id="fBike"
		>
			<div className="">
				<div className="container mx-auto mb-8">
					<h2 className="uppercase text-4xl font-extrabold ml-4 text-white text-center">
						All Bike Brands
					</h2>
				</div>

				<div className="">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{data?.data?.map((item: TBrand) => (
							<Link to={`bikes/${item?._id}`} className="category-item" key={item?._id}>
								<div className="relative main-banner">
									<div className="banner-animation relative ">
										<img src={item.image} alt="" className="w-full z-[4]" />
										<div className="absolute top-3 left-3 bg-primary px-4 uppercase z-10 rounded-sm text-white font-bold">
											{item.name}
										</div>
										<div className="absolute bottom-3 left-0 w-full z-[4]">
											<div className="flex justify-between items-center mx-4">
												<h3 className="text-2xl font-bold uppercase text-white">{item?.name}</h3>
												<button className="w-12 h-12 bg-white rounded-full flex justify-center items-center z-10">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="size-8 z-10 text-black"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] z-[2]"></div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
