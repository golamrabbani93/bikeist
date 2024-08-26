import {z} from 'zod';

export const loginSchema = z.object({
	email: z.string({required_error: 'Please enter your Email'}).email('Please enter a valid Email'),
	password: z
		.string({required_error: 'Please enter your Password'})
		.min(6, 'Password must be at least 6 characters long'),
});
