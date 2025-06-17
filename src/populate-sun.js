import { convertTime } from "./convert-time";

function populateSun(weatherObj) {
  const dataBlock = document.querySelector(".data.block");

  const sunBlock = document.createElement("div");
  sunBlock.classList.add("sun", "block");
  dataBlock.appendChild(sunBlock);

  const sunHeading = document.createElement("div");
  sunHeading.classList.add("heading");
  sunHeading.textContent = "Sunrise / Sunset";
  sunBlock.appendChild(sunHeading);

  const sunRise = document.createElement("div");
  sunRise.classList.add("rise");
  sunRise.textContent = convertTime(weatherObj.today.sunrise);
  sunBlock.appendChild(sunRise);

  const sunSet = document.createElement("div");
  sunSet.classList.add("set");
  sunSet.textContent = convertTime(weatherObj.today.sunset);
  sunBlock.appendChild(sunSet);
}

export { populateSun };
