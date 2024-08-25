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
			transformResponse: (response: TResponseRedux<TBike[]>) => {
				return {
					data: response.data,
				};
			},
		}),
	}),
});

export const {useGetAllBikeQuery} = bikeManagementApi;
