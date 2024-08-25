const ContactUs = () => {
	return (
		<div
			className="h-full bg-cover bg-center relative py-12 px-4"
			style={{backgroundImage: "url('https://i.ibb.co/Rb2wWTq/testibg.jpg')"}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-70"></div>
			<div className="relative max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-white mb-8 uppercase">Contact Us</h2>
				<div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white border-opacity-30">
					<form>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<input
								type="text"
								placeholder="Name"
								className="w-full px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-[#e2211c] text-white placeholder-white"
							/>
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-[#e2211c] text-white placeholder-white"
							/>
						</div>
						<textarea
							placeholder="Message"
							className="w-full mt-8 px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:ring-2 focus:ring-[#e2211c] text-white placeholder-white"
						></textarea>
						<button className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
