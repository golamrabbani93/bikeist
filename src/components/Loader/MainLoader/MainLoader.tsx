import {Player} from '@lottiefiles/react-lottie-player';

import loader from './Loader.json';
import {ConfigProvider, theme} from 'antd';
import {getCurrentTheme} from '../../../redux/features/theme/themeSlice';
import {useAppSelector} from '../../../redux/hooks';
const MainLoader = () => {
	const selectedTheme = useAppSelector(getCurrentTheme);

	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div
				className={`w-full h-screen  top-0 left-0 z-[9999] fixed bg-${
					selectedTheme === 'light' ? 'white' : 'black'
				}`}
			>
				<div className="flex justify-center items-center h-full">
					<Player autoplay loop src={loader} style={{height: '300px', width: '300px'}}></Player>
				</div>
			</div>
		</ConfigProvider>
	);
};

export default MainLoader;
