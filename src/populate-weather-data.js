function populateForecast(weatherObj) {
  const oldContainer = document.querySelector(".container");
  oldContainer.remove();

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("container", "forecast");
  document.body.appendChild(forecastContainer);

  const locationTitle = document.createElement("div");
  locationTitle.textContent = weatherObj.current.location;
  forecastContainer.appendChild(locationTitle);
}

export { populateForecast };
