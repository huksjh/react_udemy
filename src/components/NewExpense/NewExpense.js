import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	// ExpenseForm 에서 입력받은 데이터 받아오기
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpenseData(expenseData);
		setIsEditing(false);
	};

	const startEditing = (e) => {
		setIsEditing(true);
	};

	const stopEditing = (e) => {
		setIsEditing(false);
	};
	return (
		<div className="new-expense">
			{!isEditing && (
				<button type="button" onClick={startEditing}>
					추가 버튼
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onCancel={stopEditing}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
