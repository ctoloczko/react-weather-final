import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Current-day-container">
      <FormattedDate date={props.data.date} />
      <div className="City text-center">📍{props.data.city}</div>
      <div className="row mt-3">
        <div className="col text-center Canvas-main">
          <WeatherIcon code={props.data.icon} size={80} />

          <p>{props.data.description}</p>
        </div>
        <div className="col text-center">
          <div className="Temperature">
            {Math.round(props.data.temperature)}°C
          </div>

          <p>Feels like: {Math.round(props.data.perception)}° </p>
        </div>
        <div className="col Weather-details text-end">
          <p className="m-0">Humidity: {props.data.humidity}% </p>
          <p className="m-0">Wind: {Math.round(props.data.wind)}m/s </p>
          <p className="m-0">Pressure: {props.data.pressure}MB</p>
        </div>
      </div>
    </div>
  );
}
