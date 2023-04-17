import React, { useState } from "react";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
const Expenses = (props) => {
    const [filteredYear, setFiltereYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFiltereYear(selectedYear);
    };

    const filterExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });
    //console.log(filterExpenses);

    let expenseContent = <p style={{ color: "#fff" }}>검색된 데이터가 없습니다.</p>;
    if (filterExpenses.length > 0) {
        expenseContent = filterExpenses.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;
