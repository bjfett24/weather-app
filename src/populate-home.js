import { populateSearchBar } from "./populate-search-bar.js";

function populateHome() {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("container", "home");
  body.appendChild(container);

  const title = document.createElement("div");
  title.textContent = "Rain or Shine Forecaster";
  title.classList.add("home", "title");
  container.appendChild(title);

  populateSearchBar();

  const searchBox = document.querySelector(".search.box");
  container.appendChild(searchBox);
}

export { populateHome };
