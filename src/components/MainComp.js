import React, { useState, useEffect } from "react";
import "./style.css";

import LowerBody from "./LowerBody";



export default function MainComp() {
  const [searchValue, setSearchValue] = useState("Delhi");

  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a8cf7b6eb5fbd6b65c68a0d616bef854`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="largeBox">
        <div className="search">
          <input
            type="search"
            placeholder="Enter City"
            autoFocus
            className="searchTxtBox"
            id="searchBox"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchTxtBox"
            type="button"
            id="searchBtn"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      
      <LowerBody {...tempInfo}/>
    </>
  );
}
