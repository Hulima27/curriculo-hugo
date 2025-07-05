document.addEventListener("DOMContentLoaded", function () {
  function carregarConteudo() {
    const hash = window.location.hash;

    if (hash === "#curriculo") {
      fetch("Curriculo.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("mn-container").innerHTML = data;
        });
    }
  }

  window.addEventListener("hashchange", carregarConteudo);
  carregarConteudo(); // chama ao carregar a página
});
