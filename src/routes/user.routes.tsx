import UserDashoard from '../pages/DashBoard/User/UserDashoard';

export const userPaths = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		element: <UserDashoard />,
	},
	{
		name: 'Academic Management',
		children: [
			{
				name: 'Craete Academic Semester',
				path: 'create-academic-semester',
				element: <p>hello</p>,
			},
		],
	},
];
