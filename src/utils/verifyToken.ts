import {jwtDecode} from 'jwt-decode';
interface TDecodedToken {
	userId: string;
	userEmail: string;
	role: string;
	iat: number;
	exp: number;
}
const verifyToken = (token: string) => {
	const decoded = jwtDecode<TDecodedToken>(token);
	return decoded;
};

export default verifyToken;
