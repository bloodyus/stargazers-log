const list = document.querySelector("#starred");
const status = document.querySelector("#starred-status");

fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Unable to load starred repositories:", error);
    status.textContent = "Starred repositories could not be loaded. Please try again later.";
  });