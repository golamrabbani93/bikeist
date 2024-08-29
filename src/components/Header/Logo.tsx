import React from 'react';

const Logo = () => {
	return (
		<div className="flex items-center justify-center space-x-3">
			{/* Circle Badge */}
			<div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#e2211c] to-[#f77a54] flex items-center justify-center shadow-lg">
				{/* Optional Icon */}
				<svg
					className="w-8 h-8 text-white absolute"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M12 2L2 7l10 5 10-5L12 2z" />
					<path d="M2 17l10 5 10-5-10-5L2 17z" />
					<path d="M12 22V12" />
				</svg>

				{/* Optional Text */}
				{/* <span className="text-white text-2xl font-bold">LOGO</span> */}
			</div>

			{/* Text */}
			<div className="text-3xl font-extrabold text-gray-900 dark:text-white">
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e2211c] to-[#f77a54]">
					BikeIST
				</span>
			</div>
		</div>
	);
};

export default Logo;
