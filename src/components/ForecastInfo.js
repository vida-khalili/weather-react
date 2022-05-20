import React from "react";
import "../styles/ForecastInfo.css";
import WeatherIcon from "./WeatherIcon";

function ForecastInfo(props) {
  function Day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day=date.getDay();
    return days[day];
  }

  return (
    <div className="ForecastInfo">
      <div className="forecast-card">
        <ul>
          <li className="forecast-day">{Day()}</li>
          <li className="forecast-icon">
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li className="forecast-temperature">
            <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
            <span className="max-temp">{Math.round(props.data.temp.max)}°</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForecastInfo;
