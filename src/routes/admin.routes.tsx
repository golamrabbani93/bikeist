import AdminDashboard from '../pages/DashBoard/Admin/AdminDashboard';
import BikeLIst from '../pages/DashBoard/User/BikeManagement/BikeLIst';
import MyRental from '../pages/DashBoard/User/BikeManagement/MyRental';
import SingleBikeDetails from '../pages/DashBoard/User/BikeManagement/SingleBikeDetails';

export const adminPath = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <AdminDashboard />,
	},
	{
		name: 'Bike Management',
		children: [
			{
				name: 'Bike List',
				path: 'bike-list',
				element: <BikeLIst />,
			},
			{
				path: 'bike-list/:id',
				element: <SingleBikeDetails />,
			},
			{
				name: 'My Rental',
				path: 'my-rental',
				element: <MyRental />,
			},
		],
	},
];
