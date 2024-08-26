import {TQueryParam, TResponseRedux} from '../../../types/global';
import {TUserData} from '../../../types/user.type';
import {baseApi} from '../../api/baseApi';

const bikeManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAUser: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item: TQueryParam) => {
						params.append(item.name, item.value as string);
					});
				}
				return {
					url: '/users/me',
					method: 'GET',
					params: params,
				};
			},
			transformResponse: (response: TResponseRedux<TUserData[]>) => {
				return {
					data: response.data,
				};
			},
		}),
	}),
});

export const {useGetAUserQuery} = bikeManagementApi;
