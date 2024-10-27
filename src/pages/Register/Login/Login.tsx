import {FieldValues, SubmitHandler} from 'react-hook-form';
// import {zodResolver} from '@hookform/resolvers/zod';
// import {loginSchema} from '../../../schemas/register/login.schema';
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
import {Tabs, TabsProps} from 'antd';
import {useState} from 'react';

const Login = () => {
	useScrollTop();
	const navigate = useNavigate();
	// *login mutation
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();

	const userValue = {
		email: 'user@rabbani.com',
		password: '123456',
	};
	const adminValue = {
		email: 'admin@rabbani.com',
		password: '123456',
	};
	const [loginData, setLoginData] = useState(false);

	const onChange = (key: string) => {
		if (key === '1') {
			setLoginData(false);
		}
		if (key === '2') {
			setLoginData(true);
		}
	};

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'User',
		},
		{
			key: '2',
			label: 'Admin',
		},
	];

	//Login Value End
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleLogin: SubmitHandler<FieldValues> = async (_data) => {
		const newData = {
			email: loginData ? adminValue.email : userValue.email,
			password: loginData ? adminValue.password : userValue.password,
		};
		const toastId = toast.loading('Logging in...');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await login(newData)) as TResponse<any>;

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
				<div>
					<h2 className="text-2xl font-bold mb-2 uppercase tracking-wide  text-white">
						Login Credentials:
					</h2>
					<Tabs style={{color: '#fff'}} defaultActiveKey="1" items={items} onChange={onChange} />
				</div>
				<BikeistForm onSubmit={handleLogin}>
					{/* Email */}
					<div>
						<BikeistInput
							name={'email'}
							type={'email'}
							label="Email"
							placeholder="Your Email"
							value={loginData ? adminValue.email : userValue.email}
						/>
					</div>
					{/* Password */}
					<div>
						<BikeistInput
							name={'password'}
							type={'password'}
							label="Password"
							placeholder={'Enter Password'}
							value={loginData ? adminValue.password : userValue.password}
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
