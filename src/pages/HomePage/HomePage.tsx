import React, { useEffect, useState } from "react";
import "./HomePage.css";
import search_icon from "../../assets/search.png";
import clear from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
const HomePage = () => {
  const [data, setData] = useState(null);
  const [Icon, setIcon] = useState(null);
  let api_key = "ddaa1269a64d8f352248fe6a3bf0db94";
  const handleChange = (e) => {
    // console.log(e);
    console.log(e.target.value);
  };
  const search = async () => {
    const element = document.getElementsByClassName("search1");
    if (element[0].value === "") {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    console.log(data);

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon(snow);
    }
  };
  return (
    <div className="container0">
      <div className="container">
        <div className="search">
          <input
            onChange={(e) => handleChange(e)}
            className="search1"
            placeholder="search"
            type="text"
          />
          <div className="search-icon" onClick={() => search()}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="parent">
          <div className="weather-image">
            <img src={Icon} alt="" />
          </div>
          <div className="country">{data?.name}</div>
          <div className="temperature">{data?.main.temp}°C</div>
        </div>

        <div className="parent2">
          <div className="humidity">
            <div className="img1">
              <img src={humidity} alt="" />
            </div>
            <div className="sub_parent2">
              <span>{data?.main.humidity} %</span>
              <span>humidity</span>
            </div>
          </div>
          <div className="humidity">
            <div className="img2">
              <img src={wind} alt="" />
            </div>
            <div className="sub_parent2">
              <span>{data?.wind.speed} km/h</span>
              <span>wind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
