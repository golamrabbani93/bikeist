import {TQueryParam, TResponseRedux} from '../../../types';
import {TRental} from '../../../types/rental.type';
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
		getMyRentals: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item: TQueryParam) => {
						params.append(item.name, item.value as string);
					});
				}
				return {
					url: '/rentals',
					method: 'GET',
					params: params,
				};
			},
			transformResponse: (response: TResponseRedux<TRental[]>) => {
				return {
					data: response?.data,
				};
			},
		}),
	}),
});

export const {useCreateRentalMutation, useGetMyRentalsQuery} = rentalApi;
