import React from "react";
import Sunny from "../img/icons/icon_01d.svg";
import "../styles/ForecastInfo.css"

function ForecastInfo(){
    return (
        <div className="ForecastInfo">
            <div className="forecast-card">
                <ul>
                    <li className="forecast-day">Sat</li>
                    <li className="forecast-icon">
                        <img src={Sunny} alt={"icon"} />
                    </li>
                    <li className="forecast-temperature">
                        <span className="min-temp">25°</span>
                        <span className="max-temp">27°</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}




export default ForecastInfo;