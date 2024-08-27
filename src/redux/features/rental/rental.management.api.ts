import {baseApi} from '../../api/baseApi';

const rentalApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createRental: builder.mutation({
			query: (rentalInfo) => ({
				url: '/rentals',
				method: 'POST',
				body: rentalInfo,
			}),
		}),
	}),
});

export const {useCreateRentalMutation} = rentalApi;
