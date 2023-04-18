import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // Expensechart.js 에서 넘어온 props 에서 value 값만 추출
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    // 추출한 value 값에서 최대값 구하기
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                /** 그래프 그리기 */
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
            ))}
        </div>
    );
};

export default Chart;
