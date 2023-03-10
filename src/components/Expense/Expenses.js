import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
const Expenses = (props) => {
	return (
		<Card className="expenses">
			{props.items.map((item) => (
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
