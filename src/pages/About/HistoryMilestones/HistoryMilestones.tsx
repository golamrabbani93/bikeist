import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeline from '../../../constant/timeline';

function App() {
	const timelineElementStyle = {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		backdropFilter: 'blur(10px)',
		padding: '2rem', // Equivalent to p-8
		borderRadius: '0.75rem', // Equivalent to rounded-xl
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Equivalent to shadow-lg
		border: '1px solid rgba(255, 255, 255, 0.3)',
		color: 'var(--text-color, black)', // Fallback to black
	};

	return (
		<div className="relative py-16 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
			<VerticalTimeline>
				{timeline?.map((item, index) => (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
						contentStyle={timelineElementStyle}
						contentArrowStyle={{borderRight: '7px solid #e2211c'}}
						date={item.date}
						iconStyle={{background: '#e2211c', color: '#fff'}}
						icon={item.icon}
					>
						<div className="text-white">
							<h3 className="vertical-timeline-element-title text-2xl font-semibold">
								{item.title}
							</h3>
							<h4 className="vertical-timeline-element-subtitle text-xl font-medium ">
								{item.subtitle}
							</h4>
							<p className="">{item.desc}</p>
						</div>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
}

export default App;
