import {Button, Col, ConfigProvider, Flex, theme} from 'antd';
import {useAppSelector} from '../../../../redux/hooks';
import {getCurrentTheme} from '../../../../redux/features/theme/themeSlice';
import BikeistForm from '../../../../components/form/BikeistForm';
import BikeistInput from '../../../../components/form/BikeistInput';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {FaEdit} from 'react-icons/fa';
import {zodResolver} from '@hookform/resolvers/zod';
import {bikeSchema} from '../../../../schemas/bike/bike.schema';
import {useCreateBikeMutation} from '../../../../redux/features/bike/bike.management.api';
import {toast} from 'sonner';
import {TResponse} from '../../../../types';

const CreateBike = () => {
	const selectedTheme = useAppSelector(getCurrentTheme);
	const [createBike] = useCreateBikeMutation();
	const lightTheme = {};
	const darkTheme = {
		algorithm: theme.darkAlgorithm,
	};

	const handeleCreate: SubmitHandler<FieldValues> = async (data) => {
		const toastId = toast.loading('Bike Creating...');
		const pricePerHour = Number(data?.pricePerHour);
		const year = Number(data?.year);
		const cc = Number(data?.cc);
		const newData = {
			...data,
			pricePerHour,
			year,
			cc,
		};
		console.log('🚀🚀: CreateBike -> newData', newData);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res = (await createBike(newData)) as TResponse<any>;

		if (res.error) {
			toast.error(res?.error?.data?.message, {id: toastId, duration: 2000});
		} else {
			toast.success('Bike Creating Successful', {id: toastId, duration: 2000});
		}
	};
	return (
		<ConfigProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
			<div className="pb-10">
				<h2 className="text-3xl text-primary ml-5 mt-5 font-bold uppercase">
					Create Academic Semester :
				</h2>
				<Flex align="center" justify="center">
					<Col span="8">
						<div className="mt-6">
							<BikeistForm onSubmit={handeleCreate} resolver={zodResolver(bikeSchema)}>
								<BikeistInput label="Name" name="name" key="name" type="text" />
								<BikeistInput label="Image" name="image" key="image" type="text" />
								<BikeistInput label="Model" name="model" key="model" type="text" />
								<BikeistInput label="Brand" name="brand" key="brand" type="text" />
								<BikeistInput label="Bike CC" name="cc" key="cc" type="text" />
								<BikeistInput
									label="Price Per Hour"
									name="pricePerHour"
									key="pricePerHour"
									type="text"
								/>
								<BikeistInput
									label="Description"
									name="description"
									key="description"
									type="text"
								/>
								<BikeistInput label="Year" name="year" key="year" type="text" />
								<div className="ml-auto">
									<Button htmlType="submit" className=" w-full" type="primary">
										<FaEdit />
										Create Bike
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

export default CreateBike;
