import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useScrollTop from '../../hooks/useScrollTop';
import Mission from './Mission/Mission';
import Team from './Team/Team';

const About = () => {
	useScrollTop();
	return (
		<div>
			<BreadCrumb title="About US" />
			<Mission />
			<Team />
		</div>
	);
};

export default About;
