function generateTime(datum, currentHour) {
  if (+datum.slice(4) + +currentHour < 24) {
    return `${+datum.slice(4) + +currentHour}:00`;
  } else {
    return `${+datum.slice(4) + +currentHour - 24}:00`;
  }
}

export { generateTime };
