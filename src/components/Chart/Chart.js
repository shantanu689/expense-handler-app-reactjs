import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  let totalMaximum = 0;
  for (const dataPoint of props.dataPoints) {
    totalMaximum = Math.max(totalMaximum, dataPoint.value);
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
