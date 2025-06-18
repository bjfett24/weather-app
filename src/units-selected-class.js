function addSelectedClass(weatherObj) {
  const farTemp = document.querySelector(".far-temp");
  const celTemp = document.querySelector(".cel-temp");

  if (weatherObj.current.tempUnits === "F") {
    farTemp.classList.add("selected");
  } else if (weatherObj.current.tempUnits === "C") {
    celTemp.classList.add("selected");
  } else {
    console.log("Error while trying to add selected class to temp buttons");
  }
}

export { addSelectedClass };
