import {baseApi} from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: (userInfo) => ({
				url: '/auth/signup',
				method: 'POST',
				body: userInfo,
			}),
		}),
	}),
});

export const {useSignUpMutation} = authApi;
