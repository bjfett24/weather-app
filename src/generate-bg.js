import { generateCloud } from "./generate-cloud-phrase.js";

function setBackground(weatherObj) {
  const cloudType = generateCloud(weatherObj.current.clouds);
  const container = document.querySelector(".container.forecast");
  console.log(container);

  if (cloudType == "Overcast" || cloudType == "Mostly Cloudy") {
    container.classList.add("overcast");
  } else if (cloudType == "Partly Cloudy" || cloudType == "Mostly Clear") {
    container.classList.add("partly");
  } else if (cloudType == "Clear") {
    container.classList.add("clear");
  }
}

export { setBackground };
