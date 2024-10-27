import {Input} from 'antd';
import {ChangeEvent} from 'react';

interface FilterByPrizeProps {
	search: string | undefined;
	setSearch: (open: string) => void;
}
const Search: React.FC<FilterByPrizeProps> = ({search, setSearch}) => {
	const searchText = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div>
			<div className="my-10">
				<h2 className="text-xl uppercase font-bold border-b-2 pb-2 border-primary">
					Search by Name
				</h2>
				<div className="relative">
					<div className="divider mt-5"></div>

					<Input
						onChange={(e) => searchText(e)}
						style={{width: ' 100%'}}
						placeholder="Basic usage"
						value={search}
					/>
				</div>
				<div />
			</div>
		</div>
	);
};

export default Search;
