import {baseApi} from '../../api/baseApi';

const couponApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		createCoupon: builder.mutation({
			query: (couponData) => ({
				url: '/coupons',
				method: 'POST',
				body: couponData,
			}),
			invalidatesTags: ['coupon'],
		}),
	}),
});

export const {useCreateCouponMutation} = couponApi;
