import { populateSearchBar } from "./populate-search-bar.js";

function populateHome() {
  const body = document.querySelector("body");

  if (document.querySelector(".container") !== null) {
    const oldContainer = document.querySelector(".container");
    oldContainer.remove();
  }

  const container = document.createElement("div");
  container.classList.add("container", "home");
  body.appendChild(container);

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search", "container");
  container.appendChild(searchContainer);

  const title = document.createElement("div");
  title.textContent = "Rain or Shine Forecaster";
  title.classList.add("home", "title");
  searchContainer.appendChild(title);

  populateSearchBar();
}

export { populateHome };
