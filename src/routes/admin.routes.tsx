import AdminDashboard from '../pages/DashBoard/Admin/AdminDashboard';
import BikeLIst from '../pages/DashBoard/Admin/BikeManagement/BikeList';
import CreateBike from '../pages/DashBoard/Admin/BikeManagement/CreateBike';
import ReturnBike from '../pages/DashBoard/Admin/BikeManagement/ReturnBike';
import CreateAdmin from '../pages/DashBoard/Admin/UserManagement/createAdmin';

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
			{
				name: 'Return Bike',
				path: 'return-Bike',
				element: <ReturnBike />,
			},
		],
	},
	{
		name: 'User Management',
		children: [
			{
				name: 'Create Admin',
				path: 'create-admin',
				element: <CreateAdmin />,
			},
		],
	},
];
