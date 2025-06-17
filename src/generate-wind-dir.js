function generateWindDir(windDir) {
  if (windDir < 22.5 || windDir >= 337.5) {
    return "N";
  } else if (windDir >= 22.5 && windDir < 67.5) {
    return "NE";
  } else if (windDir >= 67.5 && windDir < 112.5) {
    return "E";
  } else if (windDir >= 112.5 && windDir < 157.5) {
    return "SE";
  } else if (windDir >= 157.5 && windDir < 202.5) {
    return "S";
  } else if (windDir >= 202.5 && windDir < 247.5) {
    return "SW";
  } else if (windDir >= 247.5 && windDir < 292.5) {
    return "W";
  } else if (windDir >= 292.5 && windDir < 337.5) {
    return "NW";
  }
}

export { generateWindDir };
