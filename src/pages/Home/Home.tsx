import Banner from './Banner/Banner';
import useScrollTop from '../../hooks/useScrollTop';
import FeaturedBike from './FeaturedBike/FeaturedBike';
import Testimonial from './Testimonial/Testimonial';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Coupons from './Coupons/Coupons';
import Brands from './Brands/Brands';

const Home = () => {
	useScrollTop();
	return (
		<div>
			<Banner />
			<Brands />
			<FeaturedBike />
			<Testimonial />
			<WhyChooseUs />
			<Coupons />
		</div>
	);
};

export default Home;
