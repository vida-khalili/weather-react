import React from "react";
import Sunny from "./img/icons/icon_01d.svg"
import "./Forecast.css"

function Forecast() {

    return (
        <div className="Forecast">
            <div className="ForecastCard">
                <ul>
                    <li className="ForecastDay">Sat</li>
                    <li className="ForecastIcon"><img src={Sunny} alt={"icon"}/></li>
                    <li className="ForecastTemperature"><span className="minTemp">25°</span><span className="maxTemp">27°</span></li>
                </ul>
            </div>
            <div className="ForecastCard">
                <ul>
                    <li className="ForecastDay">Sat</li>
                    <li className="ForecastIcon"><img src={Sunny} alt={"icon"}/></li>
                    <li className="ForecastTemperature"><span className="minTemp">25°</span><span className="maxTemp">27°</span></li>
                </ul>
            </div>
            <div className="ForecastCard">
                <ul>
                    <li className="ForecastDay">Sat</li>
                    <li className="ForecastIcon"><img src={Sunny} alt={"icon"}/></li>
                    <li className="ForecastTemperature"><span className="minTemp">25°</span><span className="maxTemp">27°</span></li>
                </ul>
            </div>
            <div className="ForecastCard">
                <ul>
                    <li className="ForecastDay">Sat</li>
                    <li className="ForecastIcon"><img src={Sunny} alt={"icon"}/></li>
                    <li className="ForecastTemperature"><span className="minTemp">25°</span><span className="maxTemp">27°</span></li>
                </ul>
            </div>
            <div className="ForecastCard">
                <ul>
                    <li className="ForecastDay">Sat</li>
                    <li className="ForecastIcon"><img src={Sunny} alt={"icon"}/></li>
                    <li className="ForecastTemperature"><span className="minTemp">25°</span><span className="maxTemp">27°</span></li>
                </ul>
            </div>
        </div>
    )

}

export default Forecast;