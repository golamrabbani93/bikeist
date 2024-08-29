import {Link} from 'react-router-dom';

const NotFound404 = () => {
	return (
		<div>
			<div className="">
				<div className="flex items-center justify-center bg-gradient-to-r from-primary  to-secondary text-white min-h-screen ">
					<div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
						<h1 className="text-9xl font-extrabold ">404</h1>
						<p className="mt-4 text-2xl font-semibold">Oops! Page not found</p>
						<p className="mt-2">The page you're looking for doesn't exist or has been moved.</p>
						<div className="mt-6">
							<Link to="/">
								<button className="mt-8 px-6 py-3 bg-[#e2211c] text-white font-bold uppercase rounded-lg hover:bg-red-700 transition duration-300">
									Go Back Home
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound404;
