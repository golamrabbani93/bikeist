import {jwtDecode} from 'jwt-decode';

const verifyToken = (token: string) => {
	const decoded = jwtDecode(token);
	return decoded;
};

export default verifyToken;
