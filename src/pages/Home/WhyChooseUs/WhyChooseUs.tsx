import {DollarOutlined, AppstoreOutlined, CustomerServiceOutlined} from '@ant-design/icons';

const WhyChooseUs = () => {
	return (
		<div className="py-12">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-primary mb-8 uppercase">Why Choose Us</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="flex flex-col justify-center items-center h-[300px] bg-white rounded-lg shadow-md px-4 m-2">
						<DollarOutlined className="text-7xl text-blue-500 mb-4" />
						<h3 className="text-2xl font-bold text-primary mb-2">Best Prices</h3>
						<p className="text-black text-xl">
							We offer competitive prices on our bike rentals without compromising on quality.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center h-[300px] bg-white rounded-lg shadow-md px-4 m-2">
						<AppstoreOutlined className="text-7xl text-blue-500 mb-4" />
						<h3 className="text-2xl font-bold text-primary mb-2">Wide Selection</h3>
						<p className="text-black text-xl">
							Choose from a wide range of bikes suited for different needs and preferences.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center h-[300px] bg-white rounded-lg shadow-md px-4 m-2">
						<CustomerServiceOutlined className="text-7xl text-blue-500 mb-4" />
						<h3 className="text-2xl font-bold text-primary mb-2">Excellent Customer Service</h3>
						<p className="text-black text-xl">
							Our friendly staff is here to help you with any questions or issues.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
