import { getLocationData } from "./get-weather-data.js";
import { returnWeatherData } from "./populate-search-bar.js";
import { populateHourly } from "./populate-hourly.js";
import { populateSearchError } from "./populate-error.js";
import { populateNowBlock } from "./populate-now-block.js";
import { populateDaily } from "./populate-daily-block.js";
import { populateSun } from "./populate-sun.js";
import { populateWind } from "./populate-wind.js";
import { setBackground } from "./generate-bg.js";

function populateForecast(weatherObj) {
  const body = document.querySelector("body");

  const oldContainer = document.querySelector(".container");
  oldContainer.remove();

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("container", "forecast");
  body.appendChild(forecastContainer);
  setBackground(weatherObj);

  const header = document.createElement("div");
  header.classList.add("forecast", "header");
  forecastContainer.appendChild(header);

  const locationTitle = document.createElement("div");
  locationTitle.classList.add("title");
  locationTitle.textContent = weatherObj.current.location;
  header.appendChild(locationTitle);

  const subSearchForm = document.createElement("form");
  subSearchForm.setAttribute("method", "GET");
  subSearchForm.classList.add("forecast", "form");
  header.appendChild(subSearchForm);

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
  header.appendChild(tempToggle);

  const dataBlock = document.createElement("div");
  dataBlock.classList.add("data", "block");
  forecastContainer.appendChild(dataBlock);

  populateNowBlock(weatherObj);
  populateHourly(weatherObj);
  populateDaily(weatherObj);
  populateSun(weatherObj);
  populateWind(weatherObj);
}

export { populateForecast };
