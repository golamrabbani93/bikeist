import {Link, useParams} from 'react-router-dom';
import {useGetAllBrandQuery} from '../../../redux/features/Brand/brand.management.api';
import {TBrand} from '../../../types/brand.type';

const Category = () => {
	const param = useParams();
	console.log('🚀🚀: Category -> param', param);
	const {data, isLoading} = useGetAllBrandQuery(undefined);

	if (isLoading) {
		return <h2></h2>;
	}
	return (
		<div>
			<h2 className="text-xl uppercase font-bold  border-b-2 pb-2 border-primary">Categories</h2>
			<div className="relative">
				<div className="divider mt-5"></div>
				<div className="w-14 h-[0.125rem] bg-primary-focus absolute top-[7px]"></div>
			</div>

			<div>
				<ul className="font-sans">
					<li className="my-3">
						<Link
							className={`text-xl font-bold hover:text-primary transition duration-300 ${
								!param.name && 'text-primary'
							}`}
							to={`/bikes`}
						>
							All
						</Link>
					</li>
					{data?.data?.map((category: TBrand) => (
						<li key={category?._id} className="my-3">
							<Link
								className={`text-xl font-bold hover:text-primary transition duration-300 ${
									param.name === category?.name && 'text-primary'
								}`}
								to={`/bikes/brands/${category?.name}`}
								// onClick={() => active(category?.name)}
							>
								{category?.name.toUpperCase()}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Category;
