import { WeatherIcon } from "./generate-cloud-phrase.js";
import { generateDay } from "./generate-day-of-week.js";
import { SVG } from "./create-svg.js";

function populateDaily(weatherObj) {
  const dataBlock = document.querySelector(".data.block");

  const dailyBlock = document.createElement("div");
  dailyBlock.classList.add("daily", "block");
  dataBlock.appendChild(dailyBlock);

  const dailyHeading = document.createElement("div");
  dailyHeading.classList.add("daily", "heading");
  dailyHeading.textContent = "Daily Forecast";
  dailyBlock.appendChild(dailyHeading);

  const dailyContent = document.createElement("div");
  dailyContent.classList.add("content");
  dailyBlock.appendChild(dailyContent);

  const todayBox = document.createElement("div");
  todayBox.classList.add("today", "box");
  dailyContent.appendChild(todayBox);

  const todayDay = document.createElement("div");
  todayDay.classList.add("day");
  todayDay.textContent = "Today";
  todayBox.appendChild(todayDay);

  const todayClouds = document.createElement("div");
  todayClouds.classList.add("clouds");
  todayBox.appendChild(todayClouds);

  const weatherIcon = new WeatherIcon(weatherObj.current.clouds);
  const cloudsSVG = new SVG(
    weatherIcon.getClassName(),
    weatherIcon.getViewBox(),
    weatherIcon.getD(),
  );
  const cloudsElement = cloudsSVG.createSVG();
  cloudsElement.classList.add("svg");
  todayClouds.appendChild(cloudsElement);

  const todayTempContainer = document.createElement("div");
  todayTempContainer.classList.add("high-low");
  todayBox.appendChild(todayTempContainer);

  const todayHigh = document.createElement("div");
  todayHigh.classList.add("high");
  todayHigh.textContent = `H: ${Math.round(weatherObj.today.high)}°`;
  todayTempContainer.appendChild(todayHigh);

  const todayLow = document.createElement("div");
  todayLow.classList.add("low");
  todayLow.textContent = `L: ${Math.round(weatherObj.today.low)}°`;
  todayTempContainer.appendChild(todayLow);

  const today = new Date();
  const todayOfWeek = today.getDay();
  const dataDays = weatherObj.daily;

  for (let datum in dataDays) {
    const box = document.createElement("div");
    box.classList.add(`${datum}`, "box");
    dailyContent.appendChild(box);

    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = generateDay(todayOfWeek, datum);
    box.appendChild(day);

    const clouds = document.createElement("div");
    clouds.classList.add("clouds");
    box.appendChild(clouds);

    const weatherIcon = new WeatherIcon(weatherObj.daily[datum].clouds);
    const cloudsSVG = new SVG(
      weatherIcon.getClassName(),
      weatherIcon.getViewBox(),
      weatherIcon.getD(),
    );
    const cloudsElement = cloudsSVG.createSVG();
    cloudsElement.classList.add("svg");
    clouds.appendChild(cloudsElement);

    const tempContainer = document.createElement("div");
    tempContainer.classList.add("high-low");
    box.appendChild(tempContainer);

    const high = document.createElement("div");
    high.classList.add("high");
    high.textContent = `H: ${Math.round(weatherObj.daily[datum].high)}°`;
    tempContainer.appendChild(high);

    const low = document.createElement("div");
    low.classList.add("low");
    low.textContent = `L: ${Math.round(weatherObj.daily[datum].low)}°`;
    tempContainer.appendChild(low);
  }
}

export { populateDaily };
