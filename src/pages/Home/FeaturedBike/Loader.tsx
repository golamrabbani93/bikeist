const CardLoader = () => {
	return (
		<div className="flex flex-col items-center space-y-4 p-4 !w-56 md:!w-72 bg-white rounded-lg shadow-lg">
			{/* Image Loader */}
			<div className="w-full h-40 bg-gray-200 rounded animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%]  md:h-[300px]"></div>

			{/* Title Loader */}
			<div className="flex w-full justify-between items-center">
				<div className="w-3/4 h-4 bg-gray-200 rounded animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%]"></div>
				<div className="w-1/4 h-4 bg-gray-200 rounded animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] ml-4"></div>
			</div>

			{/* Bottom Bar Loader */}
			<div className="flex w-full justify-between">
				<div className="w-3/4 h-4 bg-gray-200 rounded animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%]"></div>
				<div className="w-1/4 h-4 bg-gray-200 rounded animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] ml-4"></div>
			</div>
		</div>
	);
};

export default CardLoader;
