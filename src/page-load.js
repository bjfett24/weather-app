import { populateHome } from "./populate-home.js";

function pageLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    populateHome();
  });
}

export { pageLoad };
