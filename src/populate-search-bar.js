import { populateForecast } from "./populate-weather-data.js";
import { processJSON } from "./process-json.js";
import { getLocationData } from "./get-weather-data.js";
import { populateSearchError } from "./populate-error.js";

function populateSearchBar() {
  const searchBox = document.createElement("form");
  searchBox.setAttribute("method", "GET");
  searchBox.classList.add("search", "box");
  document.body.appendChild(searchBox);

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.classList.add("search", "input");
  searchInput.setAttribute("placeholder", "Stockholm...");
  searchBox.appendChild(searchInput);

  const searchButton = document.createElement("button");
  searchButton.classList.add("search", "button");
  searchButton.type = "submit";
  searchButton.textContent = "Search";
  searchBox.appendChild(searchButton);

  searchBox.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("form submitted");
    const location = searchInput.value;
    const geoData = await getLocationData(location);

    if (geoData !== null) {
      const weatherObj = await returnWeatherData(location, "F");
      populateForecast(weatherObj);
      console.log(weatherObj);
    } else {
      populateSearchError(location);
      console.log("Stopping the program");
    }
  });
}

async function returnWeatherData(location, tempUnit) {
  const cityWeatherData = await processJSON(location, tempUnit);
  return cityWeatherData;
}

export { populateSearchBar, returnWeatherData };
