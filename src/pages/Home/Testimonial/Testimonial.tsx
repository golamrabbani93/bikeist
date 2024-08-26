import {Carousel} from 'antd';
import tes1 from '../../../assets/testimonial/tes-1.png';
import tes3 from '../../../assets/testimonial/tes-3.png';
import tes4 from '../../../assets/testimonial/tes-4.png';

const testimonials = [
	{
		image: tes1,
		name: 'John Doe',
		content: 'The service was fantastic! The bikes were top-notch and the staff was very friendly.',
		designation: 'Fitness Enthusiast',
	},
	{
		image: tes4,
		name: 'Jane Smith',
		content: 'I loved the variety of bikes available. Will definitely rent again!',
		designation: 'Cycling Pro',
	},
	{
		image: tes3,
		name: 'Michael Johnson',
		content: 'Great experience! The electric bikes made commuting in the city so much easier.',
		designation: 'Commuter',
	},
];

const Testimonial = () => {
	return (
		<div className="relative h-screen w-full bg-cover bg-center bg-[url('https://i.ibb.co/GWPHBrD/testibg.jpg')]">
			<div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Overlay */}
			<div className="relative h-full flex justify-center items-center">
				<div className="w-[19rem] md:w-full text-center mx-4 md:mx-auto">
					<Carousel dots={false} autoplay>
						{testimonials.map((testimonial, index) => (
							<div key={index} className="p-6 md:p-8">
								<p className="text-lg md:text-3xl italic mb-5 text-white">
									"{testimonial.content}"
								</p>
								<img
									className="rounded-full mx-auto w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-4 md:mb-8"
									src={testimonial.image}
									alt=""
								/>
								<h4 className="text-xl md:text-4xl font-semibold text-white">{testimonial.name}</h4>
								<p className="text-white text-sm md:text-lg">{testimonial.designation}</p>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
