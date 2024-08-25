import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useScrollTop from '../../hooks/useScrollTop';
import Mission from './Mission/Mission';

const About = () => {
	useScrollTop();
	return (
		<div>
			<BreadCrumb title="About US" />
			<Mission />
		</div>
	);
};

export default About;
