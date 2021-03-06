import React from "react";
import Weather from "./components/Weather";
import "./styles/App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
          <Footer/>
      </div>
    </div>
  );
}
