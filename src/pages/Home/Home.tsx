import Banner from './Banner/Banner';
import useScrollTop from '../../hooks/useScrollTop';
import {useGetAllBikeQuery} from '../../redux/features/bike/bike.management.api';
import FeaturedBike from './FeaturedBike/FeaturedBike';
import Testimonial from './Testimonial/Testimonial';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Coupons from './Coupons/Coupons';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
	useScrollTop();

	const {data} = useGetAllBikeQuery(undefined);
	console.log('🚀🚀: Home -> data', data);
	return (
		<div>
			<Banner />
			<FeaturedBike />
			<Testimonial />
			<WhyChooseUs />
			<Coupons />
			<ContactUs />
		</div>
	);
};

export default Home;
