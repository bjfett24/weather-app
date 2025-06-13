import { populateSearchBar } from "./populate-search-bar.js";

function pageLoad() {
    document.addEventListener('DOMContentLoaded', () => {
    populateSearchBar();
});
}

export { pageLoad };