import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalytics } from "./actions";
import { makeSelectAnalytics } from "./selectors";
import Chart from "../../components/Chart";
import "./Dashboard.css";
import DateTimePicker from "../../components/DateTimePicker";
import Button from "@material-ui/core/Button";

export default function Dashboard() {
  const dispatch = useDispatch();
  const analytics = useSelector(makeSelectAnalytics());
  const [timeSpace, setTimeSpace] = useState({ from: "", to: "" });

  const renderCharts = () => {
    return Object.keys(analytics).map((key) => {
      return (
        <div className="chart" key={key}>
          <Chart dataset={analytics[key]}></Chart>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Performance Analytics</h1>
      <div className="operations">
        <DateTimePicker
          timeSpace={timeSpace}
          onChange={setTimeSpace}
          className="date-time-picker"
        ></DateTimePicker>
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(fetchAnalytics(timeSpace))}
        >
          Query
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setTimeSpace({ from: "", to: "" })}
        >
          Reset
        </Button>
      </div>
      <div className="charts">{renderCharts()}</div>
    </div>
  );
}
