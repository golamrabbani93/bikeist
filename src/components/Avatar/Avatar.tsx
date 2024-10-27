import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getCurrentUser, logOut} from '../../redux/features/auth/authSlice';

const Avatar = () => {
	const dispatch = useAppDispatch();
	const [isNavListVisible, setIsNavListVisible] = useState(false);
	const user = useAppSelector(getCurrentUser);
	const toggleNavList = () => {
		setIsNavListVisible(!isNavListVisible);
	};

	// *user Log Out
	const handleLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div className="flex justify-end ">
			<div className="relative">
				<img
					src="https://lh3.googleusercontent.com/-_4PCjcsb-ls/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmovL0b_G6wFkd826IgtjKau6AmMQ/photo.jpg?sz=46"
					alt="Avatar"
					className="w-10 h-10 rounded-full cursor-pointer"
					onClick={toggleNavList}
				/>
				{isNavListVisible && (
					<div className="absolute right-0 mt-2 w-40 sm:w-48 bg-black border rounded shadow-lg ">
						<ul className="m-2">
							<li className=" cursor-pointer w-full">
								<Link
									to={`${user?.role}/dashboard`}
									className="text-white hover:bg-[#3f3f46] transition duration-150 block p-1 pl-2 rounded-xl"
								>
									Dashboard
								</Link>
							</li>
							<li className=" cursor-pointer w-full">
								<Link
									to={'/'}
									className="text-white hover:bg-[#3f3f46] transition duration-150 block p-1 pl-2 rounded-xl"
								>
									Profile
								</Link>
							</li>

							<li
								onClick={handleLogOut}
								className="p-1 pl-2 cursor-pointer text-white hover:bg-primary transition duration-150 block rounded-xl"
							>
								Logout
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Avatar;
