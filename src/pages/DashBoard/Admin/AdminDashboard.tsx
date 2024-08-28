import {useState} from 'react';
import {FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit} from 'react-icons/fa';
import PHInput from '../../../components/form/BikeistInput';
import PHForm from '../../../components/form/BikeistForm';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {toast} from 'sonner';
import {
	useGetAUserQuery,
	useUpdateUserInfoMutation,
} from '../../../redux/features/user/user.management.api';
import SkeletonLoader from '../../../components/Loader/SkeletonLoader/SkeletonLoader';
import {TUserData} from '../../../types/user.type';

const AdminDashboard = () => {
	const [isEditing, setIsEditing] = useState(false);
	// *Get USer Data Query
	const {data, isLoading} = useGetAUserQuery(undefined);

	// *update user Data Mutation
	const [updateUser] = useUpdateUserInfoMutation();
	const user = data?.data as TUserData;
	// *form Default data
	const defaultValues = {
		name: user?.name,
		email: user?.email,
		phone: user?.phone,
		address: user?.address,
	};
	//* update form Data
	const handleProfileUpdate: SubmitHandler<FieldValues> = async (data) => {
		console.log(data);
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await updateUser(data);
			toast.success('Profile updated successfully!');
			setIsEditing(false);
		} catch (error) {
			toast.error('Failed to update profile. Please try again.');
		}
	};
	if (isLoading) {
		return <SkeletonLoader />;
	}
	return (
		<div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
			<div className="bg-white/30 backdrop-blur-lg p-10 rounded-xl shadow-xl w-full md:w-2/4 my-10">
				<h2 className="text-4xl font-bold mb-8 uppercase tracking-wide text-center text-white">
					Welcome, {user?.name as string}
				</h2>

				{isEditing ? (
					<PHForm onSubmit={handleProfileUpdate} defaultValues={defaultValues}>
						{/* Name */}
						<div className="flex items-center mb-6">
							<FaUser className="text-white text-2xl mr-4" />
							<div className="w-full">
								<PHInput name={'name'} type={'text'} label="Name" />
							</div>
						</div>
						{/* Email */}
						<div className="flex items-center mb-6">
							<FaEnvelope className="text-white text-2xl mr-4" />
							<div className="w-full">
								<PHInput name={'email'} type={'email'} label="Email" />
							</div>
						</div>
						{/* Phone */}
						<div className="flex items-center mb-6">
							<FaPhone className="text-white text-2xl mr-4" />
							<div className="w-full">
								<PHInput name={'phone'} type={'text'} label="Phone" />
							</div>
						</div>
						{/* Address */}
						<div className="flex items-center mb-6">
							<FaMapMarkerAlt className="text-white text-2xl mr-4" />
							<div className="w-full">
								<PHInput name={'address'} type={'text'} label="Address" />
							</div>
						</div>

						{/* Submit Button */}
						<div className="text-center mt-6">
							<button
								type="submit"
								className="w-full py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary focus:ring-4 focus:ring-secondary focus:outline-none transition duration-300"
							>
								Save Changes
							</button>
						</div>
					</PHForm>
				) : (
					<div className="text-center text-white">
						<div className="flex  mb-4">
							<FaUser className="text-white text-2xl mr-4" />
							<p className="text-lg">
								<strong>Name:</strong> {user?.name}
							</p>
						</div>
						<div className="flex  mb-4">
							<FaEnvelope className="text-white text-2xl mr-4" />
							<p className="text-lg">
								<strong>Email:</strong> {user?.email}
							</p>
						</div>
						<div className="flex  mb-4">
							<FaPhone className="text-white text-2xl mr-4" />
							<p className="text-lg">
								<strong>Phone:</strong> {user?.phone}
							</p>
						</div>
						<div className="flex  mb-4">
							<FaMapMarkerAlt className="text-white text-2xl mr-4" />
							<p className="text-lg">
								<strong>Address:</strong> {user?.address}
							</p>
						</div>

						<button
							onClick={() => setIsEditing(true)}
							className="mt-6 py-3 px-6 bg-secondary text-white rounded-lg shadow-lg hover:bg-primary transition duration-300 flex items-center justify-center"
						>
							<FaEdit className="mr-2" /> Edit Profile
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminDashboard;
