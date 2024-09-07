import React from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  return (
    <>
      <div>
        <form className="Search-form">
          <input type="search" placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
        <div className="Current-day-container">
          <div className="row">
            <div className="col-7">
              <h2>Saturday</h2>
            </div>
            <div className="col-5 Current-date">
              <div>7 September</div>
              <div>8:45AM</div>
            </div>
          </div>
          <div className="City text-center">📍Stockholm</div>
          <div className="row mt-3">
            <div className="col text-center">
              <p className="Icon">🌤️</p>
              <p>Sunny</p>
            </div>
            <div className="col text-center">
              <div className="Temperature">25°C</div>

              <p>Feels like: 24° </p>
            </div>
            <div className="col Weather-details text-end">
              <p className="m-0">Humidity: 56% </p>
              <p className="m-0">Wind: 4m/s </p>
              <p className="m-0">Pressure: 1020 MB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
      </div>
    </>
  );
}
