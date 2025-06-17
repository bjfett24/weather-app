import { generateCloud } from "./generate-cloud-phrase.js";
import { generateDay } from "./generate-day-of-week.js";

function populateDaily(weatherObj) {
    const dataBlock = document.querySelector('.data.block');

    const dailyBlock = document.createElement('div');
    dailyBlock.classList.add('daily', 'block');
    dataBlock.appendChild(dailyBlock);

    const todayBox = document.createElement('div');
    todayBox.classList.add('today', 'box');
    dailyBlock.appendChild(todayBox);

    const todayDay = document.createElement('div');
    todayDay.classList.add('day');
    todayDay.textContent = 'Today';
    todayBox.appendChild(todayDay);

    const todayClouds = document.createElement('div');
    todayClouds.classList.add('clouds');
    todayClouds.textContent = generateCloud(weatherObj.current.clouds);
    todayBox.appendChild(todayClouds);

    const todayHigh = document.createElement('div');
    todayHigh.classList.add('high');
    todayHigh.textContent = `H: ${Math.round(weatherObj.today.high)}°`;
    todayBox.appendChild(todayHigh);

    const todayLow = document.createElement('div');
    todayLow.classList.add('low');
    todayLow.textContent = `L: ${Math.round(weatherObj.today.low)}°`;
    todayBox.appendChild(todayLow);

    const today = new Date();
    const todayOfWeek = today.getDay();
    const dataDays = weatherObj.daily;

    for (let datum in dataDays) {
        const box = document.createElement('div');
        box.classList.add(`${datum}`, "box");
        dailyBlock.appendChild(box);

        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = generateDay(todayOfWeek, datum);
        box.appendChild(day);

        const clouds = document.createElement('div');
        clouds.classList.add('clouds');
        clouds.textContent = generateCloud(weatherObj.daily[datum].clouds);
        box.appendChild(clouds);

        const high = document.createElement('div');
        high.classList.add('high');
        high.textContent = `H: ${weatherObj.daily[datum].high}°`;
        box.appendChild(high);

        const low = document.createElement('div');
        low.classList.add('low');
        low.textContent = `L: ${weatherObj.daily[datum].low}°`;
        box.appendChild(low);
    }
    

}

export { populateDaily };