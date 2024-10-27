import {useEffect} from 'react';
import {isMobile, isTablet} from 'react-device-detect';
import {useCreateDeviceMutation} from '../../redux/features/device/deviceManagement.api';

const DeviceDetector = () => {
	const [createDevice] = useCreateDeviceMutation();
	useEffect(() => {
		const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
		createDevice({device: deviceType});
	}, [createDevice]);

	return <div></div>;
};
export default DeviceDetector;
