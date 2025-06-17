import { generateWindDir } from "./generate-wind-dir.js";
function populateWind(weatherObj) {
    const dataBlock = document.querySelector('.data.block');
    
    const windBlock = document.createElement('div');
    windBlock.classList.add('wind', 'block');
    dataBlock.appendChild(windBlock);

    const windHeading = document.createElement('div');
    windHeading.classList.add('heading');
    windHeading.textContent = 'Wind';
    windBlock.appendChild(windHeading);

    const windDirection = document.createElement('div');
    windDirection.classList.add('direction');
    windDirection.textContent = `Direction: ${generateWindDir(weatherObj.current.windDirection)}`;
    windBlock.appendChild(windDirection);

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('speed');
    windSpeed.textContent = `Speed: ${weatherObj.current.windSpeed} mph`;
    windBlock.appendChild(windSpeed);

}

export { populateWind };