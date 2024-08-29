import {z} from 'zod';
export const couponSchema = z.object({
	code: z.string({required_error: 'Please enter your Coupon'}),
});
