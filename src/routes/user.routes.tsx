import BikeLIst from '../pages/DashBoard/User/BikeManagement/BikeLIst';
import MyRental from '../pages/DashBoard/User/BikeManagement/MyRental';
import SingleBikeDetails from '../pages/DashBoard/User/BikeManagement/SingleBikeDetails';
import UserDashoard from '../pages/DashBoard/User/UserDashoard';

export const userPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <UserDashoard />,
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
