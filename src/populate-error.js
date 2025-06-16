function populateSearchError(location) {
  const messageBox = document.createElement("div");
  messageBox.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background-color: #ffdddd; color: #d8000c; padding: 10px 20px;
        border: 1px solid #d8000c; border-radius: 5px; z-index: 1001;
        font-family: sans-serif;
    `;
  messageBox.textContent = `'${location}' did not match any results. Please check your spelling and try again.`;
  document.body.appendChild(messageBox);
  setTimeout(() => {
    messageBox.remove();
  }, 3000); // Remove after 3 seconds
}

export { populateSearchError };
