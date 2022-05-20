import React from "react";
import icon_01d from "../img/icons/icon_01d.svg"
import icon_01n from "../img/icons/icon_01n.svg"
import icon_02d from "../img/icons/icon_02d.svg"
import icon_02n from "../img/icons/icon_02n.svg"
import icon_03d from "../img/icons/icon_03d.svg"
import icon_03n from "../img/icons/icon_03n.svg"
import icon_04d from "../img/icons/icon_03n.svg"
import icon_04n from "../img/icons/icon_04n.svg"
import icon_09n from "../img/icons/icon_09n.svg"
import icon_09d from "../img/icons/icon_09d.svg"
import icon_10n from "../img/icons/icon_10n.svg"
import icon_10d from "../img/icons/icon_10d.svg"
import icon_11n from "../img/icons/icon_11n.svg"
import icon_11d from "../img/icons/icon_11d.svg"
import icon_13n from "../img/icons/icon_13n.svg"
import icon_13d from "../img/icons/icon_13d.svg"
import icon_50n from "../img/icons/icon_50n.svg"
import icon_50d from "../img/icons/icon_50d.svg"
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": icon_01d,
    "01n": icon_01n,
    "02d": icon_02d,
    "02n": icon_02n,
    "03d": icon_03d,
    "03n": icon_03n,
    "04d": icon_04d,
    "04n": icon_04n,
    "09d": icon_09d,
    "09n": icon_09n,
    "10d": icon_10d,
    "10n": icon_10n,
    "11d": icon_11d,
    "11n": icon_11n,
    "13d": icon_13d,
    "13n": icon_13n,
    "50d": icon_50d,
    "50n": icon_50n,
  };

  return (
      <img className="WeatherIcon"
           src={codeMapping[props.code]}
           alt={"icon"}
      />
  );
}
