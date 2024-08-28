import {TBike} from '../../../types';
import {TQueryParam, TResponseRedux} from '../../../types/global';
import {baseApi} from '../../api/baseApi';

const bikeManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllBike: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item: TQueryParam) => {
						params.append(item.name, item.value as string);
					});
				}
				return {
					url: '/bikes',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['bike'],
			transformResponse: (response: TResponseRedux<TBike[]>) => {
				return {
					data: response.data,
				};
			},
		}),
		getABike: builder.query({
			query: (id) => {
				return {
					url: `/bikes/${id}`,
					method: 'GET',
				};
			},
			transformResponse: (response: TResponseRedux<TBike>) => {
				return {
					data: response.data,
				};
			},
		}),

		updateBike: builder.mutation({
			query: (args) => ({
				url: `/bikes/${args.id}`,
				method: 'PUT',
				body: args.data,
			}),
			invalidatesTags: ['rental', 'bike'],
		}),
	}),
});

export const {useGetAllBikeQuery, useGetABikeQuery, useUpdateBikeMutation} = bikeManagementApi;
