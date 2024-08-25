import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';

const ContactInfo = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide">Contact Us</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Address */}
					<div className="flex items-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/30">
						<FaMapMarkerAlt className="text-3xl text-white mr-4" />
						<div>
							<h3 className="text-xl font-semibold">Office Address</h3>
							<p className="text-lg">123 Bike Lane, Ride City, CA 90210</p>
						</div>
					</div>

					{/* Phone Number */}
					<div className="flex items-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/30">
						<FaPhoneAlt className="text-3xl text-white mr-4" />
						<div>
							<h3 className="text-xl font-semibold">Phone Number</h3>
							<p className="text-lg">(123) 456-7890</p>
						</div>
					</div>

					{/* Email */}
					<div className="flex items-center bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/30">
						<FaEnvelope className="text-3xl text-white mr-4" />
						<div>
							<h3 className="text-xl font-semibold">Email</h3>
							<p className="text-lg">contact@progear.com</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
