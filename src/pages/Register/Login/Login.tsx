import {FieldValues, SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema} from '../../../schemas/register/login.schema';
import {toast} from 'sonner';
import {TResponse} from '../../../types';
import {useLoginMutation} from '../../../redux/features/auth/authApi';
import verifyToken from '../../../utils/verifyToken';
import {setUser, TUser} from '../../../redux/features/auth/authSlice';
import {useAppDispatch} from '../../../redux/hooks';
import useScrollTop from '../../../hooks/useScrollTop';
import {Link, useNavigate} from 'react-router-dom';
import BikeistForm from '../../../components/form/BikeistForm';
import BikeistInput from '../../../components/form/BikeistInput';

const Login = () => {
	useScrollTop();
	const navigate = useNavigate();
	// *login mutation
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	const handleLogin: SubmitHandler<FieldValues> = async (data) => {
		console.log(data);

		const toastId = toast.loading('Logging in...');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await login(data)) as TResponse<any>;

		const token = res?.data?.token;
		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Logged In', {id: toastId, duration: 2000});
			const user = verifyToken(token) as TUser;
			dispatch(setUser({user, token}));
			navigate(`/${user.role}/dashboard`);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
			<div className="bg-white/40 backdrop-blur-lg p-10 rounded-xl shadow-xl w-full md:w-2/4 my-10">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide text-center text-white">
					Login
				</h2>
				<BikeistForm onSubmit={handleLogin} resolver={zodResolver(loginSchema)}>
					{/* Email */}
					<div>
						<BikeistInput name={'email'} type={'email'} label="Email" placeholder="Your Email" />
					</div>
					{/* Password */}
					<div>
						<BikeistInput
							name={'password'}
							type={'password'}
							label="Password"
							placeholder="Your Password"
						/>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="w-full py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary focus:ring-4 focus:ring-secondary focus:outline-none transition duration-300"
						>
							Login
						</button>
					</div>
				</BikeistForm>
				<div className="mt-2">
					<h2>
						New To Bikeist?{' '}
						<Link to={'/sign-up'} className="text-white underline ml-2 ">
							Create new account
						</Link>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Login;
