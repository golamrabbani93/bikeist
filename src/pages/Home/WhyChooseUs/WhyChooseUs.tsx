import {DollarOutlined, AppstoreOutlined, CustomerServiceOutlined} from '@ant-design/icons';

const WhyChooseUs = () => {
	return (
		<div className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide">Why Choose Us</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Best Prices Card */}
					<div className="group relative flex flex-col justify-center items-center h-[350px] bg-white/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden">
						<DollarOutlined className="text-7xl text-black mb-4 z-10 group-hover:scale-110 transition duration-300 ease-in-out" />
						<h3 className="text-3xl font-bold text-black mb-4 z-10">Best Prices</h3>
						<p className="text-black text-xl px-6 z-10">
							We offer competitive prices on our bike rentals without compromising on quality.
						</p>
					</div>

					{/* Wide Selection Card */}
					<div className="group relative flex flex-col justify-center items-center h-[350px] bg-white/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden">
						<AppstoreOutlined className="text-7xl text-black mb-4 z-10 group-hover:scale-110 transition duration-300 ease-in-out" />
						<h3 className="text-3xl font-bold text-black mb-4 z-10">Wide Selection</h3>
						<p className="text-black text-xl px-6 z-10">
							Choose from a wide range of bikes suited for different needs and preferences.
						</p>
					</div>

					{/* Excellent Customer Service Card */}
					<div className="group relative flex flex-col justify-center items-center h-[350px] bg-white/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden">
						<CustomerServiceOutlined className="text-7xl text-black mb-4 z-10 group-hover:scale-110 transition duration-300 ease-in-out" />
						<h3 className="text-3xl font-bold text-black mb-4 z-10">Excellent Customer Service</h3>
						<p className="text-black text-xl px-6 z-10">
							Our friendly staff is here to help you with any questions or issues.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
