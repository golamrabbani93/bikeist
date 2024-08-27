import {ConfigProvider, Tabs, TabsProps, theme} from 'antd';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import UnPaidTabs from './Tabs/UnPaidTabs';
import PaidTabs from './Tabs/PaidTabs';

const MyRental = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	const onChange = (key: string) => {
		console.log(key);
	};

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Paid ',
			children: <PaidTabs />,
		},
		{
			key: '2',
			label: 'Unpaid',
			children: <UnPaidTabs />,
		},
	];

	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<Tabs centered defaultActiveKey="2" items={items} onChange={onChange} addIcon />
		</ConfigProvider>
	);
};

export default MyRental;
