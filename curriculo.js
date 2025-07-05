document.addEventListener("DOMContentLoaded", function () {
    fetch("Curriculo.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("mn-container").innerHTML = data;
      });
    });