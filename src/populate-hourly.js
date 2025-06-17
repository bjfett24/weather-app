import { generateCloud } from "./generate-cloud-phrase.js";
import { generateTime } from "./generate-time.js";

function populateHourly(weatherObj) {
  const dataBlock = document.querySelector(".data.block");

  const hourlyBlock = document.createElement("div");
  hourlyBlock.classList.add("hourly", "block");
  dataBlock.appendChild(hourlyBlock);

  const hourlyHeading = document.createElement("div");
  hourlyHeading.classList.add("heading");
  hourlyHeading.textContent = "Hourly Forecast";
  hourlyBlock.appendChild(hourlyHeading);

  const hourlyContent = document.createElement("div");
  hourlyContent.classList.add("content");
  hourlyBlock.appendChild(hourlyContent);

  const nowBox = document.createElement("div");
  nowBox.classList.add("now", "box");
  hourlyContent.appendChild(nowBox);

  const nowTime = document.createElement("div");
  nowTime.classList.add("time");
  nowTime.textContent = "Now";
  nowBox.appendChild(nowTime);

  const nowTemp = document.createElement("div");
  nowTemp.classList.add("temp");
  nowTemp.textContent = `${Math.round(weatherObj.current.temp)}°`;
  nowBox.appendChild(nowTemp);

  const nowClouds = document.createElement("div");
  nowClouds.classList.add("clouds");
  nowClouds.textContent = generateCloud(weatherObj.current.clouds);
  nowBox.appendChild(nowClouds);

  const hourData = weatherObj.hourly;
  const currentHour = weatherObj.current.time.slice(11, 13);

  for (const datum in hourData) {
    const box = document.createElement("div");
    box.classList.add(`${datum}`, "box");
    hourlyContent.appendChild(box);

    const time = document.createElement("div");
    time.classList.add("time");
    time.textContent = generateTime(datum, currentHour);
    box.appendChild(time);

    const temp = document.createElement("div");
    temp.classList.add("temp");
    temp.textContent = `${Math.round(weatherObj.hourly[`hour${datum.slice(4)}`].temp)}°`;
    box.appendChild(temp);

    const clouds = document.createElement("div");
    clouds.classList.add("clouds");
    clouds.textContent = generateCloud(
      weatherObj.hourly[`hour${datum.slice(4)}`].clouds,
    );
    box.appendChild(clouds);
  }
}

export { populateHourly };
