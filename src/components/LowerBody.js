import React, { useState, useEffect } from "react";


export default function LowerBody({ temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset, }) {
  const [weatherState, setWeatherState] = React.useState("");
//   const {
//     temp,
//     humidity,
//     pressure,
//     weatherMood,
//     name,
//     speed,
//     country,
//     sunset,
//   } = tempInfo;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-fog");
          break; 
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Mist":
          setWeatherState("wi-day-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="lowerBody">
        <div className="upperPart">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="middlePart">
          <div className="leftPortion">
            <span>{temp}&deg; </span>
            <div className="tempPlace">
              <div className="tempMood">{weatherMood}</div>
              <div className="place">
                {name},{country}
              </div>
            </div>
          </div>
          <div className="rightPortion">{new Date().toLocaleString()}</div>
        </div>
        <div className="lowerPart">
          <div className="twoColumnSection">
            <p className="icons">
              <i className="wi wi-sunset"></i>
            </p>
            <p className="rightSideInfo">
              {timeStr}
              <br />
              Sunset
            </p>
          </div>
          <div className="twoColumnSection">
            <p className="icons">
              <i className="wi wi-humidity"></i>
            </p>
            <p className="rightSideInfo">
              {humidity} <br />
              Humidity
            </p>
          </div>
          <div className="twoColumnSection">
            <p className="icons">
              <i className="wi wi-barometer"></i>
            </p>
            <p className="rightSideInfo">
              {pressure}MM <br />
              Pressure
            </p>
          </div>
          <div className="twoColumnSection">
            <p className="icons">
              <i className="wi wi-strong-wind"></i>
            </p>
            <p className="rightSideInfo">
              {speed} <br />
              Wind
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
