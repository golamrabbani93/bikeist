import {TQueryParam, TResponseRedux} from '../../../types';
import {TCoupon} from '../../../types/coupon.type';
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
		getAllCoupons: builder.query({
			query: (args) => {
				const params = new URLSearchParams();

				if (args) {
					args.map((item: TQueryParam) => {
						params.append(item.name, item.value as string);
					});
				}
				return {
					url: '/coupons',
					method: 'GET',
					params: params,
				};
			},
			providesTags: ['coupon'],
			transformResponse: (response: TResponseRedux<TCoupon[]>) => {
				return {
					data: response?.data,
				};
			},
		}),
	}),
});

export const {useCreateCouponMutation, useGetAllCouponsQuery} = couponApi;
