import axios from "axios";
import React, { useState } from "react";
import "../styles/Forecast.css";
import ForecastInfo from "./ForecastInfo";

function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(false);
  function handelResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastInfo data={forecastData[0]} />
        <ForecastInfo data={forecastData[1]} />
        <ForecastInfo data={forecastData[2]} />
        <ForecastInfo data={forecastData[3]} />
        <ForecastInfo data={forecastData[4]} />
      </div>
    );
  } else {
    let apiKey = "6c60fabe649d33c314498b8aba31de6b";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }
}

export default Forecast;
