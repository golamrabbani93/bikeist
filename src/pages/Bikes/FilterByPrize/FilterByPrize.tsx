import {Select} from 'antd';
import React from 'react';

interface FilterByPrizeProps {
	setPrice: (open: string) => void;
}
const FilterByPrize: React.FC<FilterByPrizeProps> = ({setPrice}) => {
	const handleChange = (value: string) => {
		setPrice(value);
	};

	return (
		<div>
			<div className="mt-10">
				<h2 className="text-xl uppercase font-bold border-b-2 pb-2 border-primary">
					FILTER BY PRICE
				</h2>
				<div className="relative">
					<div className="divider mt-5"></div>
					<div className="w-14 h-[0.125rem] bg-primary-focus absolute top-[7px]"></div>
				</div>
				<div />
				<Select
					defaultValue="Lowest to Highest"
					style={{width: ' 100%'}}
					onChange={handleChange}
					options={[
						{value: '', label: 'Lowest to Highest'},
						{value: '-pricePerHour', label: 'Highest to Lowest'},
					]}
					suffixIcon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg>
					}
				/>
			</div>
		</div>
	);
};

export default FilterByPrize;
