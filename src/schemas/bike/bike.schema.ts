import {z} from 'zod';

export const bikeSchema = z.object({
	name: z.string({required_error: 'Please enter the bike name'}).min(1, 'Bike name is required'),
	brand: z.string({required_error: 'Please enter the bike brand'}).min(1, 'Bike brand is required'),
	model: z.string({required_error: 'Please enter the bike model'}).min(1, 'Bike model is required'),
	year: z.string({required_error: 'Please enter the bike year'}),
	description: z.string({required_error: 'Please enter a description'}),

	pricePerHour: z.string({required_error: 'Please enter the price per hour'}),
	cc: z.string({required_error: 'Please enter the bike engine capacity'}),

	image: z.string({required_error: 'Please enter the image URL'}),
});
