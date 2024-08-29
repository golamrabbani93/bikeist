import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import SignUp from '../pages/Register/SignUP/SignUP';
import Login from '../pages/Register/Login/Login';
import routesGenerator from '../utils/routesGenerator';
import {userPaths} from './user.routes';
import ProtectedRoute from '../layouts/ProtectedRoute';
import DashBoardLayout from '../layouts/dashBoardLayout/DashBoardLayout';
import PaymentLayout from '../layouts/PaymentLayout/PaymentLayout';
import {adminPath} from './admin.routes';
import NotFound404 from '../pages/404/NotFound404';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about-us',
				element: <About />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		path: '/user',
		element: (
			<ProtectedRoute role="user">
				<DashBoardLayout />
			</ProtectedRoute>
		),
		children: routesGenerator(userPaths),
	},
	{
		path: '/admin',
		element: (
			<ProtectedRoute role="admin">
				<DashBoardLayout />
			</ProtectedRoute>
		),
		children: routesGenerator(adminPath),
	},
	{
		path: '/payment',
		element: <PaymentLayout />,
	},
	{
		path: '*',
		element: <NotFound404 />,
	},
]);

export default router;
