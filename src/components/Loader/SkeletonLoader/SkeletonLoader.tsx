import {Skeleton} from 'antd';

const SkeletonLoader = () => {
	return (
		<div className="ml-10">
			<Skeleton style={{marginBottom: '20px', marginTop: '20px'}} />
			<Skeleton style={{marginBottom: '20px'}} />
			<Skeleton style={{marginBottom: '20px'}} />
			<Skeleton style={{marginBottom: '20px'}} />
		</div>
	);
};

export default SkeletonLoader;
