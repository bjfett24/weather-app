import { getLocationData } from "./get-weather-data.js";
import { generateCloud } from "./generate-cloud-phrase.js";
import { returnWeatherData } from "./populate-search-bar.js";
import { generateUV } from "./generate-uv-word.js";
import { populateHourly } from "./populate-hourly.js";

function populateForecast(weatherObj) {
  const oldContainer = document.querySelector(".container");
  oldContainer.remove();

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("container", "forecast");
  document.body.appendChild(forecastContainer);

  const locationTitle = document.createElement("div");
  locationTitle.classList.add("forecast", "title");
  locationTitle.textContent = weatherObj.current.location;
  forecastContainer.appendChild(locationTitle);

  const subSearchForm = document.createElement("form");
  subSearchForm.setAttribute("method", "GET");
  subSearchForm.classList.add("forecast", "form");
  forecastContainer.appendChild(subSearchForm);

  const forecastInput = document.createElement("input");
  forecastInput.classList.add("forecast", "input");
  forecastInput.type = "text";
  subSearchForm.appendChild(forecastInput);

  const forecastSearchButton = document.createElement("button");
  forecastSearchButton.type = "submit";
  forecastSearchButton.textContent = "Search";
  forecastSearchButton.classList.add("forecast", "search-button");
  subSearchForm.appendChild(forecastSearchButton);

  subSearchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("form submitted");
    const location = forecastInput.value;
    const geoData = await getLocationData(location);

    if (geoData !== null) {
      const weatherObj = await returnWeatherData(location);
      populateForecast(weatherObj);
      console.log(weatherObj);
    } else {
      populateSearchError(location);
      console.log("Stopping the program");
    }
  });

  const tempToggle = document.createElement("button");
  tempToggle.classList.add("temp-toggle");
  tempToggle.textContent = "Temp Toggle";
  forecastContainer.appendChild(tempToggle);

  const dataBlock = document.createElement("div");
  dataBlock.classList.add("forecast-block");
  forecastContainer.appendChild(dataBlock);

  const nowBlock = document.createElement("div");
  nowBlock.classList.add("now-block");
  dataBlock.appendChild(nowBlock);

  const nowTemp = document.createElement("div");
  nowTemp.classList.add("now-temp");
  nowTemp.textContent = `${Math.round(weatherObj.current.temp)}°`;
  nowBlock.appendChild(nowTemp);

  const nowClouds = document.createElement("div");
  nowClouds.classList.add("now-clouds");
  nowClouds.textContent = generateCloud(weatherObj.current.clouds);
  nowBlock.appendChild(nowClouds);

  const feelBox = document.createElement("div");
  feelBox.classList.add("feels-like", "box");
  nowBlock.appendChild(feelBox);

  const feelHead = document.createElement("div");
  feelHead.textContent = "Feels Like";
  feelHead.classList.add("heading");
  feelBox.appendChild(feelHead);

  const feelVal = document.createElement("div");
  feelVal.classList.add("value");
  feelVal.textContent = `${Math.round(weatherObj.current.feels)}°`;
  feelBox.appendChild(feelVal);

  const precipBox = document.createElement("div");
  precipBox.classList.add("precip", "box");
  nowBlock.appendChild(precipBox);

  const precipHead = document.createElement("div");
  precipHead.classList.add("heading");
  precipHead.textContent = "Precipitation";
  precipBox.appendChild(precipHead);

  const precipVal = document.createElement("div");
  precipVal.classList.add("value");
  precipVal.textContent = `${weatherObj.current.precipitation}"`;
  precipBox.appendChild(precipVal);

  const precipMessage = document.createElement("div");
  precipMessage.classList.add("message");
  precipMessage.textContent = "in the last 24 hours";
  precipBox.appendChild(precipMessage);

  const humidityBox = document.createElement("div");
  humidityBox.classList.add("humidity", "box");
  nowBlock.appendChild(humidityBox);

  const humidityHead = document.createElement("div");
  humidityHead.classList.add("heading");
  humidityHead.textContent = "Humidity";
  humidityBox.appendChild(humidityHead);

  const humidityVal = document.createElement("div");
  humidityVal.classList.add("value");
  humidityVal.textContent = `${weatherObj.current.humidity}%`;
  humidityBox.appendChild(humidityVal);

  const uvBox = document.createElement("div");
  uvBox.classList.add("uv", "box");
  nowBlock.appendChild(uvBox);

  const uvHead = document.createElement("div");
  uvHead.classList.add("heading");
  uvHead.textContent = "UV Index";
  uvBox.appendChild(uvHead);

  const uvVal = document.createElement("div");
  uvVal.classList.add("value");
  uvVal.textContent = `${weatherObj.today.uv}`;
  uvBox.appendChild(uvVal);

  const uvWord = document.createElement("div");
  uvWord.classList.add("word");
  uvWord.textContent = generateUV(weatherObj.today.uv);
  uvBox.appendChild(uvWord);

  const hourlyBlock = document.createElement("div");
  hourlyBlock.classList.add("hourly", "block");
  dataBlock.appendChild(hourlyBlock);

  populateHourly(weatherObj);
}

export { populateForecast };
