import React, { useState, useRef } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleInputRef = useRef(null);
    const amoutInputRef = useRef(null);
    const dateInputRef = useRef(null);

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredTitle === "") {
            alert("이름을 입력하세요");
            titleInputRef.current.focus();
            return false;
        }

        if (enteredAmount === "") {
            alert("금액을 입력하세요");
            amoutInputRef.current.focus();
            return false;
        }

        if (enteredDate === "") {
            alert("날짜를 입력하세요");
            dateInputRef.current.focus();
            return false;
        }

        // 입력받은 데이터 가공
        const expenses = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // NewExpense.js 설정된 onSaveExpenseData prop에 설정된 함수에 expenses 값을 담아 실행
        props.onSaveExpenseData(expenses);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} ref={titleInputRef} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} ref={amoutInputRef} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} ref={dateInputRef} />
                </div>
            </div>
            <div className="new-expense__actions">
                {/* NewExpense.js props 에설정된 onClick => stopEditing 함수 실행 */}
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
