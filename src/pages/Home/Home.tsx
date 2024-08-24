import Banner from './Banner/Banner';
import useScrollTop from '../../hooks/useScrollTop';

const Home = () => {
	useScrollTop();
	return (
		<div>
			<Banner />
		</div>
	);
};

export default Home;
