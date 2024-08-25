import {DollarOutlined, AppstoreOutlined, CustomerServiceOutlined} from '@ant-design/icons';

const Mission = () => {
	return (
		<div className="relative py-16 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
			<div className="absolute inset-0 flex justify-center items-center">
				<div className="absolute border-4 border-white opacity-10 rounded-full w-[500px] h-[500px] -top-32 -left-32"></div>
				<div className="absolute border-4 border-white opacity-10 rounded-full w-[600px] h-[600px] -bottom-32 -right-32"></div>
			</div>

			<div className="relative max-w-6xl mx-auto text-center z-10">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide">Our Mission</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<div className="group relative flex flex-col justify-center items-center h-[450px] bg-gradient-to-t from-white to-[#f5f5f5] rounded-lg shadow-2xl border border-white/30 overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
						<DollarOutlined className="text-8xl text-primary mb-4 z-10 group-hover:text-secondary transition-colors duration-500 ease-in-out" />
						<h3 className="text-4xl font-semibold text-primary mb-4 z-10">Purpose</h3>
						<p className="text-gray-800 text-lg px-6 z-10">
							Our platform is designed to provide an exceptional bike rental experience. We are
							dedicated to promoting sustainability and enhancing mobility through innovative
							solutions.
						</p>
						<div className="absolute inset-0 border-2 border-secondary rounded-full opacity-20"></div>
					</div>

					<div className="group relative flex flex-col justify-center items-center h-[450px] bg-gradient-to-t from-white to-[#f5f5f5] rounded-lg shadow-2xl border border-white/30 overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
						<AppstoreOutlined className="text-8xl text-primary mb-4 z-10 group-hover:text-secondary transition-colors duration-500 ease-in-out" />
						<h3 className="text-4xl font-semibold text-primary mb-4 z-10">Values</h3>
						<ul className="text-gray-800 text-lg px-6 z-10 space-y-4">
							<li>Integrity: We uphold honesty and transparency in all our operations.</li>
							<li>Innovation: Continuously improving our services to meet customer needs.</li>
							<li>Customer-Centric: Focusing on providing exceptional service and support.</li>
							<li>Excellence: Striving for the highest quality in every aspect of our business.</li>
						</ul>
						<div className="absolute inset-0 border-2 border-secondary rounded-full opacity-20"></div>
					</div>

					<div className="group relative flex flex-col justify-center items-center h-[450px] bg-gradient-to-t from-white to-[#f5f5f5] rounded-lg shadow-2xl border border-white/30 overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
						<CustomerServiceOutlined className="text-8xl text-primary mb-4 z-10 group-hover:text-secondary transition-colors duration-500 ease-in-out" />
						<h3 className="text-4xl font-semibold text-primary mb-4 z-10">Customer Service</h3>
						<p className="text-gray-800 text-lg px-6 z-10">
							Our dedicated team is here to assist you with any questions or concerns, ensuring a
							seamless and enjoyable rental experience.
						</p>
						<div className="absolute inset-0 border-2 border-secondary rounded-full opacity-20"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
