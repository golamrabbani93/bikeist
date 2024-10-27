import {useNavigate, useParams} from 'react-router-dom';
import {Button, Pagination} from 'antd';
import {useEffect, useState} from 'react';
import {useGetAllBikeQuery} from '../../redux/features/bike/bike.management.api';
import Category from './Category/Category';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import SingleBike from '../../components/SingleBike/SingleBike';
import CardLoader from '../Home/FeaturedBike/Loader';
import Search from './Search/Search';
import FilterByPrize from './FilterByPrize/FilterByPrize';
import useScrollTop from '../../hooks/useScrollTop';

const Bikes = () => {
	const {name} = useParams<{name?: string}>();
	const navigate = useNavigate();
	useScrollTop();

	const [query, setQuery] = useState<{name: string; value: string | undefined}[] | undefined>([]);
	const [price, setPrice] = useState<string | undefined>(undefined);
	undefined;
	const [search, setSearch] = useState<string | undefined>(undefined);
	const [page, setPage] = useState<string>('1');

	const {data, isLoading} = useGetAllBikeQuery(query);
	const bikes = data?.data;
	const paginationData = data?.meta;
	useEffect(() => {
		const newQuery: {name: string; value: string | undefined}[] = [{name: 'page', value: page}];

		if (name) {
			newQuery.push({name: 'brand', value: name});
			newQuery.push({name: 'page', value: '1'});
		}
		if (search) {
			newQuery.push({name: 'searchTerm', value: search});
			newQuery.push({name: 'page', value: '1'});
		}
		if (price) {
			newQuery.push({name: 'sort', value: price});
			newQuery.push({name: 'page', value: '1'});
		}

		setQuery(newQuery);
	}, [name, search, price, page]);
	const handleClaerFilter = () => {
		navigate('/bikes');
		setPage('1');
		setSearch('');
		setPrice('');
		setQuery(undefined);
	};
	return (
		<div>
			<BreadCrumb title="All Bikes" />
			<div className="container m-auto my-[100px]">
				<div className="shop-main grid grid-cols-1 md:grid-cols-4 gap-4 mx-8 md:mx-12 xl:mx-20">
					{/* !left side bar */}
					<div className="left-side">
						<Search search={search} setSearch={setSearch} />
						<Category />
						<FilterByPrize setPrice={setPrice}></FilterByPrize>

						<Button
							onClick={handleClaerFilter}
							className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase mt-20"
						>
							Clear All Filter
						</Button>
					</div>
					{/* !right side bar */}
					<div className="right-sid md:col-start-2 md:col-end-5">
						<h2 className="text-xl uppercase font-bold  border-b-2 pb-2 border-primary">Bikes</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
							{isLoading
								? Array(9)
										.fill(0)
										.map((_, index) => <CardLoader key={index} />)
								: bikes?.map((bike) => <SingleBike bike={bike} key={bike._id} />)}
						</div>
						{(bikes ?? []).length > 0 ? (
							<div className="mt-10 flex justify-center text-primary">
								<Pagination
									current={paginationData?.page || 1}
									total={paginationData?.total || 0}
									pageSize={paginationData?.limit || 1}
									onChange={(page) => setPage(page.toString())}
								/>
							</div>
						) : (
							<h2>No Bikes Found</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bikes;
