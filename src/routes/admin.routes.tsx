import AdminDashboard from '../pages/DashBoard/Admin/AdminDashboard';
import BikeLIst from '../pages/DashBoard/Admin/BikeManagement/BikeList';
import CreateBike from '../pages/DashBoard/Admin/BikeManagement/CreateBike';

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
				name: 'Create Bike',
				path: 'create-Bike',
				element: <CreateBike />,
			},
		],
	},
];
