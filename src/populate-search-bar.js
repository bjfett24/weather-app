import { processJSON } from "./process-json.js";

function populateSearchBar() {
    const searchBox = document.createElement('div');
    searchBox.classList.add('search');
    document.body.appendChild(searchBox);

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.classList.add('search', 'input');
    searchBox.appendChild(searchInput);

    const searchButton = document.createElement('button');
    searchButton.classList.add('search', 'button');
    searchButton.textContent = "Search";
    searchButton.addEventListener('click', () => {
        consoleWeatherData(searchInput.value);
    })
    searchBox.appendChild(searchButton);

}

async function consoleWeatherData(location) {
    const cityWeatherData = await processJSON(location);
    console.log(cityWeatherData);
  }

  export { populateSearchBar }