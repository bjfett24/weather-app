//What kind of data will I need for the weather app?

/* 
Current data:
    temperature
    feels like
    visibility
    precipitation
    clouds
    humidity
    air pressure
    uv
    wind
Hourly Forecast:
    temperature 
    clouds

Daily Forecast:
    highs and lows
*/

import { dailyWeatherData, getLocationData } from "./get-weather-data.js";

async function processJSON(location) {
  const locationJSON = await getLocationData(location);
  console.log(locationJSON);
  const responseJSON = await dailyWeatherData(
    locationJSON.at(0).lon,
    locationJSON.at(0).lat,
  );

  const weatherObj = {
    current: {
      location: locationJSON.at(0).name,
      time: responseJSON.current.time,
      longitude: locationJSON.at(0).lon,
      latitude: locationJSON.at(0).lat,
      temp: responseJSON.current.temperature_2m,
      feels: responseJSON.current.apparent_temperature,
      clouds: responseJSON.current.cloud_cover,
      humidity: responseJSON.current.relative_humidity_2m,
      precipitation: responseJSON.current.precipitation,
      pressure: responseJSON.current.pressure_msl,
      windDirection: responseJSON.current.wind_direction_10m,
      windSpeed: responseJSON.current.wind_speed_10m,
    },
    today: {
      sunrise: responseJSON.daily.sunrise.at(0),
      sunset: responseJSON.daily.sunset.at(0),
      high: responseJSON.daily.temperature_2m_max.at(0),
      low: responseJSON.daily.temperature_2m_min.at(0),
      uv: responseJSON.daily.uv_index_max.at(0),
    },
    hourly: {},
    daily: {},
  };

  for (let i = 1; i <= 24; i++) {
    weatherObj.hourly["hour" + i] = {
      clouds: responseJSON.hourly.cloud_cover.at(i),
      temp: responseJSON.hourly.temperature_2m.at(i),
    };
  }

  for (let i = 1; i <= 6; i++) {
    weatherObj.daily["day" + i] = {
      clouds: responseJSON.daily.cloud_cover_mean.at(i),
      high: responseJSON.daily.temperature_2m_max.at(i),
      low: responseJSON.daily.temperature_2m_min.at(i),
    };
  }

  return weatherObj;
}

export { processJSON };
