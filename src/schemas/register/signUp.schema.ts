import {z} from 'zod';

export const signUpSchema = z.object({
	name: z.string({required_error: 'Please enter your name'}).min(1, 'Name is required'),
	email: z
		.string({required_error: 'Please enter your email'})
		.email({message: 'Please enter a valid email address'}),
	password: z
		.string({required_error: 'Please enter a password'})
		.min(6, {message: 'Password must be at least 6 characters long'}),
	phone: z
		.string({required_error: 'Please enter your phone number'})
		.min(10, {message: 'Phone number must be at least 10 digits'})
		.regex(/^\d+$/, {message: 'Phone number should contain only numbers'}),
	address: z.string({required_error: 'Please enter your address'}).min(1, 'Address is required'),
});
