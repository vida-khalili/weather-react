import React from "react";
import Weather from "./Weather";
import "./App.css";
import Footer from "./Footer";
import Forecast from "./Forecast";

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
