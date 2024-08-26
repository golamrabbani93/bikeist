import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import SignUp from '../pages/Register/SignUP/SignUP';
import Login from '../pages/Register/Login/Login';

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
]);

export default router;
