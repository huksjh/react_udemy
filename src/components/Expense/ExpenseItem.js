import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // console.log(props);
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log("Clicked!!");
        setTitle("Clicked!!");
    };
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
                <button onClick={clickHandler}>타이틀 변경</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;
