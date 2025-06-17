import { generateCloud } from "./generate-cloud-phrase.js";
import { generateUV } from "./generate-uv-word.js";

function populateNowBlock(weatherObj) {
    const dataBlock = document.querySelector('.data.block');
    
    const nowBlock = document.createElement("div");
    nowBlock.classList.add("now-block");
    dataBlock.appendChild(nowBlock);
  
    const nowTemp = document.createElement("div");
    nowTemp.classList.add("now-temp");
    nowTemp.textContent = `${Math.round(weatherObj.current.temp)}°`;
    nowBlock.appendChild(nowTemp);
  
    const nowClouds = document.createElement("div");
    nowClouds.classList.add("now-clouds");
    nowClouds.textContent = generateCloud(weatherObj.current.clouds);
    nowBlock.appendChild(nowClouds);
  
    const feelBox = document.createElement("div");
    feelBox.classList.add("feels-like", "box");
    nowBlock.appendChild(feelBox);
  
    const feelHead = document.createElement("div");
    feelHead.textContent = "Feels Like";
    feelHead.classList.add("heading");
    feelBox.appendChild(feelHead);
  
    const feelVal = document.createElement("div");
    feelVal.classList.add("value");
    feelVal.textContent = `${Math.round(weatherObj.current.feels)}°`;
    feelBox.appendChild(feelVal);
  
    const precipBox = document.createElement("div");
    precipBox.classList.add("precip", "box");
    nowBlock.appendChild(precipBox);
  
    const precipHead = document.createElement("div");
    precipHead.classList.add("heading");
    precipHead.textContent = "Precipitation";
    precipBox.appendChild(precipHead);
  
    const precipVal = document.createElement("div");
    precipVal.classList.add("value");
    precipVal.textContent = `${weatherObj.current.precipitation}"`;
    precipBox.appendChild(precipVal);
  
    const precipMessage = document.createElement("div");
    precipMessage.classList.add("message");
    precipMessage.textContent = "in the last 24 hours";
    precipBox.appendChild(precipMessage);
  
    const humidityBox = document.createElement("div");
    humidityBox.classList.add("humidity", "box");
    nowBlock.appendChild(humidityBox);
  
    const humidityHead = document.createElement("div");
    humidityHead.classList.add("heading");
    humidityHead.textContent = "Humidity";
    humidityBox.appendChild(humidityHead);
  
    const humidityVal = document.createElement("div");
    humidityVal.classList.add("value");
    humidityVal.textContent = `${weatherObj.current.humidity}%`;
    humidityBox.appendChild(humidityVal);
  
    const uvBox = document.createElement("div");
    uvBox.classList.add("uv", "box");
    nowBlock.appendChild(uvBox);
  
    const uvHead = document.createElement("div");
    uvHead.classList.add("heading");
    uvHead.textContent = "UV Index";
    uvBox.appendChild(uvHead);
  
    const uvVal = document.createElement("div");
    uvVal.classList.add("value");
    uvVal.textContent = `${weatherObj.today.uv}`;
    uvBox.appendChild(uvVal);
  
    const uvWord = document.createElement("div");
    uvWord.classList.add("word");
    uvWord.textContent = generateUV(weatherObj.today.uv);
    uvBox.appendChild(uvWord);
}

export { populateNowBlock };