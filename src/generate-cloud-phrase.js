function generateCloud(value) {
  let phrase;
  if (value == 0) {
    phrase = "Clear";
  } else if (value > 0 && value <= 25) {
    phrase = "Mostly Clear";
  } else if (value > 25 && value <= 50) {
    phrase = "Partly Cloudy";
  } else if (value > 50 && value <= 87) {
    phrase = "Mostly Cloudy";
  } else if (value > 87) {
    phrase = "Overcast";
  }

  return phrase;
}

export { generateCloud };
