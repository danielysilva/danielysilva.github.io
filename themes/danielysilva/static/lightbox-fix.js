document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.lightbox .fechar').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      history.back();
    });
  });
});
