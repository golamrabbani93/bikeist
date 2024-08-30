import {DollarOutlined, AppstoreOutlined, CustomerServiceOutlined} from '@ant-design/icons';

const Mission = () => {
	return (
		<div className="relative py-16 bg-primary text-white overflow-hidden md:px-10">
			<div className="absolute inset-0 flex justify-center items-center">
				<div className="absolute w-[700px] h-[700px] bg-white opacity-10 rounded-full blur-3xl -top-32 -left-32"></div>
				<div className="absolute w-[700px] h-[700px] bg-white opacity-10 rounded-full blur-3xl -bottom-32 -right-32"></div>
			</div>

			<div className="relative max-w-7xl mx-auto text-center z-10">
				<h2 className="text-5xl font-extrabold mb-12 uppercase tracking-wide text-gray-200">
					Our Mission
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
					<div className="group relative flex flex-col justify-center items-center p-8 bg-secondary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
						<DollarOutlined className="text-6xl text-white mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out" />
						<h3 className="text-3xl font-semibold mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out">
							Purpose
						</h3>
						<p className="text-gray-100 text-lg text-center">
							Providing an exceptional bike rental experience while promoting sustainability and
							enhancing mobility through innovative solutions.
						</p>
					</div>

					<div className="group relative flex flex-col justify-center items-center p-8 bg-secondary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
						<AppstoreOutlined className="text-6xl text-white mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out" />
						<h3 className="text-3xl font-semibold mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out">
							Values
						</h3>
						<ul className="text-gray-100 text-lg text-center space-y-4">
							<li>Integrity: Honesty and transparency in all operations.</li>
							<li>Innovation: Continuously improving our services.</li>
						</ul>
					</div>

					<div className="group relative flex flex-col justify-center items-center p-8 bg-secondary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
						<CustomerServiceOutlined className="text-6xl text-white mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out" />
						<h3 className="text-3xl font-semibold mb-4 group-hover:text-primary transition-colors duration-500 ease-in-out">
							Customer Service
						</h3>
						<p className="text-gray-100 text-lg text-center">
							Dedicated support to assist with any questions, ensuring a seamless and enjoyable
							rental experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
