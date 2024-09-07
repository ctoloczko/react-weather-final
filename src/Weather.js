import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
      <div>
        <h2>Saturday</h2>

        <h4>
          <span>7 September</span> | <span>8:45AM</span>
        </h4>
        <div className="row">
          <div className="col">
            <p>🌤️</p>
            <p>Sunny</p>
          </div>
          <div className="col">
            <p>25°C</p>
            <p>Stockholm</p>
            <p>Feels like: 24° </p>
          </div>
        </div>
        <div>
          <p>Humidity: 56% </p>
          <p>Wind: 4m/s </p>
          <p>Pressure: 1020 MB</p>
        </div>
      </div>
    </div>
  );
}
