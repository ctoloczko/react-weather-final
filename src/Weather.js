import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div>
          <form className="Search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <div>
          <WeatherForecast />
        </div>
      </>
    );
  } else {
    search();
    return "Loading . . .";
  }
}
