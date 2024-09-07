import React, { useState } from "react";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
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
            <FormattedDate date={weatherData.date} />
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

                <p>Feels like: {Math.round(weatherData.perception)}° </p>
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
