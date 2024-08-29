import {FieldValues, SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema} from '../../../schemas/register/signUp.schema';
import {toast} from 'sonner';
import {TResponse} from '../../../types';
import {useSignUpMutation} from '../../../redux/features/auth/authApi';
import useScrollTop from '../../../hooks/useScrollTop';
import {Link, useNavigate} from 'react-router-dom';
import BikeistForm from '../../../components/form/BikeistForm';
import BikeistInput from '../../../components/form/BikeistInput';

const SignUp = () => {
	useScrollTop();
	const navigate = useNavigate();
	// *sign up mutation
	const [signUp] = useSignUpMutation();
	const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
		console.log(data);
		const newData = {
			...data,
			role: 'user',
		};
		try {
			const toastId = toast.loading('User Creating');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const userInfo = (await signUp(newData)) as TResponse<any>;

			if (userInfo.error) {
				toast.error(userInfo.error.data.message, {
					id: toastId,
					duration: 2000,
				});
			} else {
				toast.success('Sign Up Successfully', {
					id: toastId,
					duration: 2000,
				});
				navigate('/login');
			}
		} catch (error) {
			toast.error('Something went wrong');
		}
	};
	return (
		<div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
			<div className="bg-white/40 backdrop-blur-lg p-10 rounded-xl shadow-xl w-full md:w-2/4 my-10">
				<h2 className="text-4xl font-bold mb-12 uppercase tracking-wide text-center text-white">
					Sign Up
				</h2>
				<BikeistForm onSubmit={handleSignUp} resolver={zodResolver(signUpSchema)}>
					{/* Name */}
					<div>
						<BikeistInput name={'name'} type={'text'} label="Name" placeholder="Your Name" />
					</div>
					{/* Email */}
					<div>
						<BikeistInput name={'email'} type={'email'} label="Email" placeholder="Your Email" />
					</div>
					{/* Password */}
					<BikeistInput
						name={'password'}
						type={'password'}
						label="Password"
						placeholder="Your Password"
					/>
					{/* Phone */}
					<BikeistInput name={'phone'} type={'text'} label="Phone" placeholder="Your Phone" />
					{/* Address */}
					<div>
						<BikeistInput
							name={'address'}
							type={'text'}
							label="Address"
							placeholder="Your Address"
						/>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="w-full py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary focus:ring-4 focus:ring-secondary focus:outline-none transition duration-300"
						>
							Sign Up
						</button>
					</div>
				</BikeistForm>
				<div className="mt-2">
					<h2>
						Already Have An Acount?{' '}
						<Link to={'/login'} className="text-white underline ml-2 ">
							Login
						</Link>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
