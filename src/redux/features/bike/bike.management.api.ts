import {TBike} from '../../../types';
import {TQueryParam, TResponseRedux, TResponseReduxM} from '../../../types/global';
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
			transformResponse: (response: TResponseReduxM<TBike[]>) => {
				const data = response?.data?.data || [];
				const meta = response?.data?.meta || null;

				return {
					data,
					meta,
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
		createBike: builder.mutation({
			query: (data) => ({
				url: `/bikes`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['rental', 'bike'],
		}),

		updateBike: builder.mutation({
			query: (args) => ({
				url: `/bikes/${args.id}`,
				method: 'PUT',
				body: args.data,
			}),
			invalidatesTags: ['rental', 'bike'],
		}),
		deleteBike: builder.mutation({
			query: (id) => ({
				url: `/bikes/${id}`,
				method: 'DELETE',
			}),
			// Optionally, invalidate tags or update the cache
			invalidatesTags: ['rental', 'bike'],
		}),
	}),
});

export const {
	useGetAllBikeQuery,
	useGetABikeQuery,
	useCreateBikeMutation,
	useUpdateBikeMutation,
	useDeleteBikeMutation,
} = bikeManagementApi;
