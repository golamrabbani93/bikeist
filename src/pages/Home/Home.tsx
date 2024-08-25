import Banner from './Banner/Banner';
import useScrollTop from '../../hooks/useScrollTop';
import {useGetAllBikeQuery} from '../../redux/features/bike/bike.management.api';

const Home = () => {
	useScrollTop();

	const {data} = useGetAllBikeQuery(undefined);
	console.log('🚀🚀: Home -> data', data);
	return (
		<div>
			<Banner />
		</div>
	);
};

export default Home;
