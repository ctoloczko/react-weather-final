import React, { useState } from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      day: "Saturday",
      date: "7 September",
      time: "9:23pm",
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      perception: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
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
                <h2>{weatherData.day}</h2>
              </div>
              <div className="col-5 Current-date">
                <div>{weatherData.date}</div>
                <div>{weatherData.time}</div>
              </div>
            </div>
            <div className="City text-center">📍{weatherData.city}</div>
            <div className="row mt-3">
              <div className="col text-center">
                <img src={weatherData.icon} alt="weather-icon"></img>
                <p>{weatherData.description}</p>
              </div>
              <div className="col text-center">
                <div className="Temperature">
                  {Math.round(weatherData.temperature)}°C
                </div>

                <p>Feels like: {weatherData.perception}° </p>
              </div>
              <div className="col Weather-details text-end">
                <p className="m-0">Humidity: {weatherData.humidity}% </p>
                <p className="m-0">Wind: {Math.round(weatherData.wind)}m/s </p>
                <p className="m-0">Pressure: {weatherData.pressure}MB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <WeatherForecast />
        </div>
      </>
    );
  } else {
    const apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading . . .";
  }
}
