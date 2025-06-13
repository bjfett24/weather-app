async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=38ea6e23259802ea122fe0f499c7ed7b`,
      { mode: "cors" },
    );


    // Check if the HTTP response itself was successful (e.g., no 404, 500 errors)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const currentData = await response.json();
    console.log(currentData);
    return currentData;
  } catch (error) {
    // This .catch() handles network errors or errors thrown by our 'response.ok' check
    console.error("Fetch error:", error);
  }
}

async function dailyWeatherData(lon, lat) {
    try {
      
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,cloud_cover_mean&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,cloud_cover,visibility,temperature_80m,wind_direction_80m,wind_speed_80m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch` , { mode: "cors" },
      );
  
  
      // Check if the HTTP response itself was successful (e.g., no 404, 500 errors)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } catch (error) {
      // This .catch() handles network errors or errors thrown by our 'response.ok' check
      console.error("Fetch error:", error);
    }
  }

export { getWeatherData, dailyWeatherData };
