document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash === "#curriculo") {
    fetch("Curriculo.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("mn-container").innerHTML = data;
      });
    }
});
