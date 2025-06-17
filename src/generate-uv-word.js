function generateUV(value) {
  let word;
  if (value > 0 && value <= 2) {
    word = "Low";
  } else if (value > 2 && value <= 5) {
    word = "Moderate";
  } else if (value > 5 && value <= 7) {
    word = "High";
  } else if (value > 7 && value <= 10) {
    word = "Very High";
  } else if (value >= 11) {
    word = "Extreme";
  }
  return word;
}

export { generateUV };
