import { populateForecast } from "./populate-weather-data.js";
import { processJSON } from "./process-json.js";
import { getLocationData } from "./get-weather-data.js";
import { populateSearchError } from "./populate-error.js";

function populateSearchBar() {
  const searchBox = document.createElement("div");
  searchBox.classList.add("search", "box");
  document.body.appendChild(searchBox);

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.classList.add("search", "input");
  searchInput.setAttribute("placeholder", "Stockholm...");
  searchBox.appendChild(searchInput);

  const searchButton = document.createElement("button");
  searchButton.classList.add("search", "button");
  searchButton.textContent = "Search";
  searchButton.addEventListener("click", async () => {
    const geoData = await getLocationData(searchInput.value);
    if (geoData === null) {
      populateSearchError(searchInput.value);
      console.log("Stopping the program");
    } else {
      const weatherObj = await returnWeatherData(searchInput.value);
      populateForecast(weatherObj);
      console.log(weatherObj);
    }
  });
  searchBox.appendChild(searchButton);
}

async function returnWeatherData(location) {
  const cityWeatherData = await processJSON(location);
  return cityWeatherData;
}

export { populateSearchBar, returnWeatherData };
