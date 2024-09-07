import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.coordinates) {
      setLoaded(false);
    }
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <>
        <WeatherForecastDay data={forecast[0]} />
        <WeatherForecastDay data={forecast[1]} />
        <WeatherForecastDay data={forecast[2]} />
        <WeatherForecastDay data={forecast[3]} />
        <WeatherForecastDay data={forecast[4]} />
      </>
    );
  } else {
    let apiKey = "8eatdeae3d0b8e63a64512c0d2f3a54o";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
