import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "../styles/Weather.css";
import Forecast from "./Forecast";
import LoadingBars from "../img/loadingBars.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6c60fabe649d33c314498b8aba31de6b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className=" current-weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 ">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 p-0">
                <button className="btn btn-primary w-100">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading-bars">
        <img src={LoadingBars} alt="loading" className="img-fluid" />
      </div>
    );
  }
}
