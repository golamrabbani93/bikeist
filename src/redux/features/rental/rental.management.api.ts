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
			invalidatesTags: ['rental', 'bike'],
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
			providesTags: ['rental', 'bike'],
		}),
		updateRental: builder.mutation({
			query: (args) => ({
				url: `/rentals/${args.id}`,
				method: 'PUT',
				body: args.data,
			}),
			invalidatesTags: ['rental', 'bike'],
		}),
	}),
});

export const {useCreateRentalMutation, useGetMyRentalsQuery, useUpdateRentalMutation} = rentalApi;
