const Coupons = () => {
	return (
		<div>
			<div className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide">Coupons & Discounts</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						{/* Active Promotions Card */}
						<div className="relative bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
							<div className="relative p-8">
								<h3 className="text-3xl font-bold mb-6 text-gray-900 z-10">Active Promotions</h3>
								<div className="p-4 bg-white rounded-lg mb-4 shadow-lg z-10 relative">
									<p className="text-2xl font-semibold text-primary">
										Use code <span className="font-bold">SAVE20</span> for 20% off your first
										rental!
									</p>
								</div>
								<div className="p-4 bg-white rounded-lg shadow-lg z-10 relative">
									<p className="text-2xl font-semibold text-secondary">
										Free additional hour with code <span className="font-bold">FREETIME</span>.
									</p>
								</div>
							</div>
						</div>

						{/* How to Apply Coupons Card */}
						<div className="relative bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
							<div className="relative p-8">
								<h3 className="text-3xl font-bold mb-6 text-gray-900 z-10">How to Apply Coupons</h3>
								<ol className="list-decimal list-inside text-lg z-10 relative">
									<li className="mb-3">Choose your bike and rental duration.</li>
									<li className="mb-3">Proceed to the checkout page.</li>
									<li className="mb-3">Enter your coupon code in the "Coupon Code" field.</li>
									<li>Click "Apply" to see your discount.</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coupons;
