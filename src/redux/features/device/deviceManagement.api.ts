import {TResponseRedux} from '../../../types';

import {baseApi} from '../../api/baseApi';

const deviceApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createDevice: builder.mutation({
			query: (deviceData) => ({
				url: '/devices',
				method: 'POST',
				body: deviceData,
			}),
			invalidatesTags: ['device'],
		}),
		getAllDevice: builder.query({
			query: () => {
				return {
					url: '/device',
					method: 'GET',
				};
			},
			providesTags: ['device'],
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			transformResponse: (response: TResponseRedux<any>) => {
				return {
					data: response?.data,
				};
			},
		}),
	}),
});

export const {useCreateDeviceMutation, useGetAllDeviceQuery} = deviceApi;
