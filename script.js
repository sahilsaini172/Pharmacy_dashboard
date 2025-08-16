const mainContent = document.getElementById("main_content");

function loadScreen(file) {
  fetch(`screens/${file}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      mainContent.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadScreen("orders.html");
});
