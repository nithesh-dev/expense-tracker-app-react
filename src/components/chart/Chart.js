import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const expenseMaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={expenseMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
