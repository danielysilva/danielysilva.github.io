document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fechar').forEach(fechar => {
        fechar.addEventListener('click', (event) => {
            event.preventDefault();

            let scrollPos = window.scrollY;

            // Esconde a lightbox antes de mudar a URL
            document.querySelector('.lightbox')?.classList.add('hidden');

            setTimeout(() => {
                window.location.hash = "";
                history.replaceState(null, null, window.location.pathname);
                window.scrollTo(0, scrollPos);
            }, 200);
        });
    });
});
