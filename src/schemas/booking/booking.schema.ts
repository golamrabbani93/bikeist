import {z} from 'zod';
import dayjs from 'dayjs';

export const bookingSchema = z.object({
	startTime: z.preprocess((value) => {
		// Check if the value is a Day.js object or a string
		if (value && dayjs.isDayjs(value)) {
			return value.toDate(); // Convert Day.js object to native Date
		} else if (typeof value === 'string') {
			return new Date(value); // Convert string to Date
		}
		return value; // Return the value as is if it's already a Date
	}, z.date({required_error: 'Please Select Booking Date'})),
});
