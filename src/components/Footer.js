import React from "react";
import "../styles/Footer.css"
function Footer() {
  return (
    <p className="Footer">
        This project was coded by{" "}
        <a
            href="https://www.linkedin.com/in/vida-khalili-bbb500a4/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Vida Khalili
        </a>{" "}
        and is{" "}
        <a
            href="https://github.com/vida-khalili/weather-react"
            target="_blank"
            rel="noopener noreferrer"
        >
            open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
            href="https://weatherapp-vid.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
        >
            hosted on Netlify
        </a>
    </p>
  );
}
export default Footer;
