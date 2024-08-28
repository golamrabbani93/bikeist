import {ConfigProvider, Tabs, TabsProps, theme} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import UnPaidTabs from './Tabs/UnPaidTabs';
import PaidTabs from './Tabs/PaidTabs';
import {getCurrentTab, setActiveTab} from '../../../../redux/features/tab/tabSlice';
import {useEffect} from 'react';

const MyRental = () => {
	// *theme Management
	const selectedTheme = useAppSelector(getCurrentTheme);
	// const [activeTab, setActiveTab] = useState('');
	const dispatch = useAppDispatch();
	const tab = useAppSelector(getCurrentTab);

	useEffect(() => {
		dispatch(setActiveTab(tab));
	}, [tab, dispatch]);

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
	const handleTabChange: TabsProps['onChange'] = (key) => {
		// Dispatch action to update the active tab in Redux store
		dispatch(setActiveTab(key as '1' | '2')); // Adjust according to your tab keys
	};

	const lightTheme = {};

	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<Tabs centered activeKey={tab} items={items} addIcon onChange={handleTabChange} />
		</ConfigProvider>
	);
};

export default MyRental;
