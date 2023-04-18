import React from "react";

import Chart from "../Chat/Chart";

const ExpenseChart = (props) => {
    // 레이블 타이틀 설정 초기값
    const chartDataPoints = [
        { label: "1월", value: 0 },
        { label: "2월", value: 0 },
        { label: "3월", value: 0 },
        { label: "4월", value: 0 },
        { label: "5월", value: 0 },
        { label: "6월", value: 0 },
        { label: "7월", value: 0 },
        { label: "8월", value: 0 },
        { label: "9월", value: 0 },
        { label: "10월", value: 0 },
        { label: "11월", value: 0 },
        { label: "12월", value: 0 },
    ];

    // expense 입력받은 값 불러오기
    for (const expense of props.expenses) {
        // 1월,2월 구하기   getMonth 시작은 0부터   0- 1월, 1-2월, 2-3월....
        console.log(expense);
        const expenseMonth = expense.date.getMonth();
        console.log(expenseMonth);
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
