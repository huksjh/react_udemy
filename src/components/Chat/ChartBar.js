import React from "react";

import "./ChartBar.css";
const ChartBar = (props) => {
    // 바 높이 구하기
    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        barFillHeight = Math.round((parseInt(props.value) / props.maxValue) * 100) + "%";
    }
    return (
        <div className="chat-bar">
            {/**
             * 그래프 영역
             * value, maxValue 값으로 넘어온 데이터 처리
             */}
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight, backgroundColor: "red" }}></div>
            </div>
            {/** 레이블 타이틀 영역 */}
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
