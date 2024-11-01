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
import SingleBikeDetails from '../pages/DashBoard/User/BikeManagement/SingleBikeDetails';
import ComparisonTool from '../components/ComparisonTool/ComparisonTool';
import Contact from '../pages/Contact/Contact';
import Bikes from '../pages/Bikes/bikes';

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
				path: '/contact-us',
				element: <Contact />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/bikes',
				element: <Bikes />,
			},
			{
				path: '/bikes/:id',
				element: <SingleBikeDetails />,
			},
			{
				path: 'bikes/brands/:name',
				element: <Bikes />,
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
		element: (
			<ProtectedRoute role="user">
				<PaymentLayout />
			</ProtectedRoute>
		),
	},
	{
		path: 'bikes/comparison',
		element: <ComparisonTool />,
	},
	{
		path: '*',
		element: <NotFound404 />,
	},
]);

export default router;
