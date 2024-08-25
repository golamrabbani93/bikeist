import Banner from './Banner/Banner';
import useScrollTop from '../../hooks/useScrollTop';
import {useGetAllBikeQuery} from '../../redux/features/bike/bike.management.api';
import FeaturedBike from './FeaturedBike/FeaturedBike';

const Home = () => {
	useScrollTop();

	const {data} = useGetAllBikeQuery(undefined);
	console.log('🚀🚀: Home -> data', data);
	return (
		<div>
			<Banner />
			<FeaturedBike />
		</div>
	);
};

export default Home;
