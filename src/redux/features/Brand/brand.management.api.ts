import {TBrand} from '../../../types/brand.type';
import {TQueryParam, TResponseRedux} from '../../../types/global';
import {baseApi} from '../../api/baseApi';

const brandManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllBrand: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item: TQueryParam) => {
						params.append(item.name, item.value as string);
					});
				}
				return {
					url: '/brands',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['brands'],
			transformResponse: (response: TResponseRedux<TBrand[]>) => {
				const data = response?.data || [];

				return {
					data,
				};
			},
		}),
		createBrand: builder.mutation({
			query: (data) => ({
				url: `/brands/create-brand`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['brands'],
		}),

		updateBrand: builder.mutation({
			query: (args) => ({
				url: `/brands/${args.id}`,
				method: 'PUT',
				body: args.data,
			}),
			invalidatesTags: ['brands'],
		}),
		deleteBrand: builder.mutation({
			query: (id) => ({
				url: `/brands/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['brands'],
		}),
	}),
});

export const {
	useGetAllBrandQuery,
	useCreateBrandMutation,
	useUpdateBrandMutation,
	useDeleteBrandMutation,
} = brandManagementApi;
