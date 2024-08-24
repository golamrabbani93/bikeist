import {Button} from 'antd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleBanner = ({data}: {data: any}) => {
	const contentStyle = {
		height: '100vh',
	};
	const {image, quote, description} = data;
	return (
		<div className="relative " style={contentStyle}>
			<img src={image} alt="" className="w-full h-full object-cover" />

			<div className="banner_opacity absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] h-full w-full"></div>
			<div className="container mx-auto text-white">
				<div className="absolute top-[35%] ml-4 md:ml-10">
					<div className="">
						<h1 className="text-primary-focus text-3xl md:text-5xl xl:text-[70px] font-bold  leading-[40px] md:leading-[90px] mt-2 mb-4 uppercase">
							{quote}
						</h1>
						<p className=" md:text-xl xl:text-2xl w-[80%] md:w-[60%] xl:w-[50%] 2xl:w-[40%] md:mb-5 text-justify  mb-4">
							{description}
						</p>
						<Button className="bg-primary border-0 hover:!bg-secondary !text-white md:w-[200px] h-[40px] font-bold uppercase cursor-pointer">
							See Deatails
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBanner;
