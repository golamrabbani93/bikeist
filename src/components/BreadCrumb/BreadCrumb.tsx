const BreadCrumb = ({title}: {title: string}) => {
	return (
		<div
			className="h-[400px] bg-cover bg-center relative py-12 px-4"
			style={{backgroundImage: "url('https://i.ibb.co/Rb2wWTq/testibg.jpg')"}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-70"></div>
			<div className="flex h-full justify-center items-center">
				<div className="relative max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-8 uppercase">{title}</h2>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
