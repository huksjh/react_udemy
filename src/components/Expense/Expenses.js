import React, { useState } from "react";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
const Expenses = (props) => {
	const [filteredYear, setFiltereYear] = useState("2023");
	const filterChangeHandler = (selectedYear) => {
		console.log("filterChangeHandler");
		setFiltereYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selectedYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((item) => (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
