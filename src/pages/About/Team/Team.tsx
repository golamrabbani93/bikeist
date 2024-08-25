import p1 from '../../../assets/testimonial/tes-1.png';
import p2 from '../../../assets/testimonial/tes-3.png';
import p3 from '../../../assets/testimonial/tes-4.png';

const teamMembers = [
	{
		name: 'Alice Johnson',
		title: 'CEO & Founder',
		bio: 'Alice has over 20 years of experience in the bike rental industry and is passionate about sustainable transportation solutions.',
		photo: p1,
	},
	{
		name: 'Bob Smith',
		title: 'CTO',
		bio: 'Bob leads our tech team with a focus on innovation and cutting-edge solutions to enhance our platform’s functionality.',
		photo: p2,
	},
	{
		name: 'Carla Davis',
		title: 'Head of Customer Service',
		bio: 'Carla ensures that our customers receive the best service possible, with a dedication to addressing any concerns promptly.',
		photo: p3,
	},
];

const Team = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide">Meet Our Team</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg border text-black border-white border-opacity-30"
						>
							{/* Decorative Circle */}
							<div className="absolute inset-0 flex justify-center items-center">
								<div className="absolute w-48 h-48 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-md"></div>
							</div>

							<div className="text-center">
								{/* Profile Photo */}
								<img
									src={member.photo}
									alt={member.name}
									className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 text-center m-auto"
								/>

								{/* Name and Title */}
								<h3 className="text-2xl font-semibold text-black mb-2">{member.name}</h3>
								<p className="text-xl font-medium mb-4">{member.title}</p>

								{/* Bio */}
								<p className="">{member.bio}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
