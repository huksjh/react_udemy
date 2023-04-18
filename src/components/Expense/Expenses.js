import React, { useState } from "react";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpesesList from "./ExpensesList";

import "./Expenses.css";
const Expenses = (props) => {
    const [filteredYear, setFiltereYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFiltereYear(selectedYear);
    };

    const filterExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filterExpenses} />
                <ExpesesList items={filterExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
