import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let nextDay = (day + 1) % 7;

    return days[nextDay];
  }
  return (
    <div className="Forecast-container">
      <div className="row align-items-center">
        <div className="col-4  text-center">{day()}</div>
        <div className="col-3">
          <WeatherIcon code={props.data.condition.icon} size={40} />
        </div>
        <div className="col-5">
          Max: {maxTemp()}°C | Min: {minTemp()}°C
        </div>
      </div>
    </div>
  );
}
