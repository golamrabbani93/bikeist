/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	BaseQueryApi,
	BaseQueryFn,
	createApi,
	DefinitionType,
	FetchArgs,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
import {logOut, setUser} from '../features/auth/authSlice';
import {toast} from 'sonner';

const baseaseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:5000/api',
	prepareHeaders: (headers, {getState}) => {
		const token = (getState() as RootState).auth.token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}

		return headers;
	},
});

const customBaseQueryWithRefressToken: BaseQueryFn<
	FetchArgs,
	BaseQueryApi,
	DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
	let result = await baseaseQuery(args, api, extraOptions);

	if (result?.error?.status === 404) {
		const message = (result?.error?.data as {message?: string})?.message;
		toast.error(message);
	}
	if (result?.error?.status === 401) {
		const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
			method: 'POST',
			credentials: 'include',
		});

		const data = await res.json();
		if (data?.data?.accessToken) {
			const user = (api.getState() as RootState).auth.user;

			api.dispatch(setUser({user, token: data?.data?.accessToken}));
		} else {
			api.dispatch(logOut());
		}
		result = await baseaseQuery(args, api, extraOptions);

		return result;
	}
	return result;
};

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: customBaseQueryWithRefressToken,
	endpoints: () => ({}),
});