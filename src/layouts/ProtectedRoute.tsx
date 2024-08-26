import {ReactNode} from 'react';

import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getCurrentToken, logOut} from '../redux/features/auth/authSlice';
import verifyToken from '../utils/verifyToken';

type TProtectedRoute = {
	children: ReactNode;
	role: string | undefined;
};

const ProtectedRoute = ({children, role}: TProtectedRoute) => {
	const token = useAppSelector(getCurrentToken);

	let user;

	if (token) {
		user = verifyToken(token);
	}

	const dispatch = useAppDispatch();

	if (role !== undefined && role !== user?.role) {
		dispatch(logOut());
		return <Navigate to="/login" replace={true} />;
	}
	if (!token) {
		return <Navigate to="/login" replace={true} />;
	}

	return children;
};

export default ProtectedRoute;
