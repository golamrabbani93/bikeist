import banner1 from '../../../assets/images/Banner/Banner-1.jpg';
import banner2 from '../../../assets/images/Banner/Banner-2.jpg';
import banner4 from '../../../assets/images/Banner/Banner-4.jpg';
import {Carousel} from 'antd';
import SingleBanner from './SingleBanner/SingleBanner';
const bannerData = [
	{
		image: banner1,
		quote: 'Empowering Connectivity',
		description:
			'Revolutionizing global communication by ensuring technology reaches everyone, bridging gaps, and fostering seamless interactions.',
	},
	{
		image: banner2,
		quote: 'Driving Innovation',
		description:
			'Pushing boundaries in tech, pioneering solutions that shape a smarter, interconnected world, and advancing society through continuous innovation.',
	},
	{
		image: banner4,
		quote: 'Transforming Future',
		description:
			'Redefining the future with cutting-edge ICT, creating a digitally-driven world where possibilities are limitless and progress is constant.',
	},
];

const Banner = () => {
	return (
		<div className="text-white">
			<Carousel dotPosition="right" autoplay>
				{bannerData.map((item, index) => {
					return <SingleBanner key={index} data={item} />;
				})}
			</Carousel>
		</div>
	);
};

export default Banner;
