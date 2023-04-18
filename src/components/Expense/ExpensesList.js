import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpesesList = (props) => {
    if (props.items.length === 0) {
        return <h1 className="expenses-list__fallbak">검색된 데이터가 없습니다.</h1>;
    }
    return (
        <ul className="expenses-list">
            {props.items.map((item) => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            ))}
        </ul>
    );
};

export default ExpesesList;
