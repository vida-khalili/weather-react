import React from "react";
import Weather from "./components/Weather";
import "./styles/App.css";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
          <Forecast/>
          <Footer/>
      </div>
    </div>
  );
}
