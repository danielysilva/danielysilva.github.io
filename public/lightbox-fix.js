document.addEventListener('click', function(e) {
  const el = e.target;
  // Só atua em links de fechar dentro dos lightboxes que têm href="#"
  if(el.matches('.lightbox .fechar[href="#"]')) {
    e.preventDefault(); // evita alterar o hash e o scroll
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
});
