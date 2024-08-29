import {Button, Col, ConfigProvider, Flex, theme} from 'antd';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import BikeistForm from '../../../../components/form/BikeistForm';
import BikeistInput from '../../../../components/form/BikeistInput';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {FaEdit} from 'react-icons/fa';
import {zodResolver} from '@hookform/resolvers/zod';
import {toast} from 'sonner';
import {TResponse} from '../../../../types';
import {useCreateCouponMutation} from '../../../../redux/features/coupon/couponManagement.api';
import {couponSchema} from '../../../../schemas/coupon/coupo.schema';

const CreateCoupon = () => {
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [createCoupon] = useCreateCouponMutation();
	const lightTheme = {};
	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	const handeleCreate: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading('Coupon Creating...');
		console.log(data);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await createCoupon(data)) as TResponse<any>;

		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Coupon Creating Successful', {id: toastId, duration: 2000});
		}
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div className="pb-10">
				<h2 className="text-3xl text-primary ml-5 mt-5 font-bold uppercase">
					Create Discount Coupon:
				</h2>
				<Flex align="center" justify="center">
					<Col span="8">
						<div className="mt-6">
							<BikeistForm onSubmit={handeleCreate} resolver={zodResolver(couponSchema)}>
								<BikeistInput
									label="Coupon code (e.g. DISCOUNT20)."
									name="code"
									key="code"
									type="text"
								/>
								<div className="ml-auto">
									<Button htmlType="submit" className="w-full" type="primary">
										<FaEdit />
										Create Coupon
									</Button>
								</div>
							</BikeistForm>
						</div>
					</Col>
				</Flex>
			</div>
		</ConfigProvider>
	);
};

export default CreateCoupon;
