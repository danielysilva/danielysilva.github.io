document.addEventListener("DOMContentLoaded", function () {
  let scrollYBeforeOpen = 0;

  // Salva a posição de scroll ao abrir a lightbox
  document.querySelectorAll('.galeria a[href^="#imagem"]').forEach(function (link) {
    link.addEventListener("click", function () {
      scrollYBeforeOpen = window.scrollY || window.pageYOffset;
    });
  });

  // Intercepta o clique no botão de fechar
  document.querySelectorAll('.lightbox a[href="#"]').forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Impede o navegador de processar o hash #
      e.preventDefault();

      // Remove o hash da URL sem mudar o histórico
      history.replaceState(null, document.title, window.location.pathname + window.location.search);

      // Espera o :target sair de cena e restaura o scroll
      setTimeout(function () {
        window.scrollTo({ top: scrollYBeforeOpen, behavior: "auto" });
      }, 0);
    });
  });
});
setTimeout(() => {
  window.scrollTo(0, scrollBeforeOpen);
}, 50); // aumente para 50ms
