import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
	const dropDonChangeHandler = (e) => {
		props.onChangeFilter(e.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>년도 필터</label>
				<select
					value={props.selectedYear}
					onChange={dropDonChangeHandler}
				>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
