import { getLocationData } from "./get-weather-data.js";
import { returnWeatherData } from "./populate-search-bar.js";
import { populateHourly } from "./populate-hourly.js";
import { populateSearchError } from "./populate-error.js";
import { populateNowBlock } from "./populate-now-block.js";
import { populateDaily } from "./populate-daily-block.js";
import { populateSun } from "./populate-sun.js";
import { populateWind } from "./populate-wind.js";
import { setBackground } from "./generate-bg.js";
import { SVG } from "./create-svg.js";
import { addSelectedClass } from "./units-selected-class.js";

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
  forecastSearchButton.classList.add("forecast", "search-button");
  subSearchForm.appendChild(forecastSearchButton);

  const magnifyIcon = new SVG(
    "magnify-button",
    "0 0 24 24",
    "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
  );
  const magnifyElement = magnifyIcon.createSVG();
  forecastSearchButton.appendChild(magnifyElement);

  subSearchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("form submitted");
    const location = forecastInput.value;
    const geoData = await getLocationData(location);

    if (geoData !== null) {
      const newWeatherObj = await returnWeatherData(location, "F");
      populateForecast(newWeatherObj);
      console.log(newWeatherObj);
    } else {
      populateSearchError(location);
      console.log("Stopping the program");
    }
  });

  const tempButtons = document.createElement("div");
  tempButtons.classList.add("temp-buttons");
  header.appendChild(tempButtons);

  const farTemp = document.createElement("button");
  farTemp.classList.add("far-temp");
  farTemp.textContent = "°F";
  farTemp.addEventListener("click", async () => {
    const newWeatherObj = await returnWeatherData(
      weatherObj.current.location,
      "F",
    );
    populateForecast(newWeatherObj);
  });
  tempButtons.appendChild(farTemp);

  const celTemp = document.createElement("button");
  celTemp.classList.add("cel-temp");
  celTemp.textContent = "°C";
  celTemp.addEventListener("click", async () => {
    const newWeatherObj = await returnWeatherData(
      weatherObj.current.location,
      "C",
    );
    populateForecast(newWeatherObj);
  });
  tempButtons.appendChild(celTemp);

  addSelectedClass(weatherObj);

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
