import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(null);
  function showTemp(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c60fabe649d33c314498b8aba31de6b&units=metric`;
    axios.get(url).then(showTemp);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="search" />
        </form>
        <div>
          <ul>
            <li>{city}</li>
            <li>Temperature: {temperature}°C</li>
            <li>description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
            <li>
              <img src={icon} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}
