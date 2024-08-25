import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useScrollTop from '../../hooks/useScrollTop';
import HistoryMilestones from './HistoryMilestones/HistoryMilestones';
import Mission from './Mission/Mission';
import Team from './Team/Team';

const About = () => {
	useScrollTop();
	return (
		<div>
			<BreadCrumb title="About US" />
			<Mission />
			<Team />
			<HistoryMilestones />
		</div>
	);
};

export default About;
