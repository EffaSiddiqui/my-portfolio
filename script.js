const navLinks = document.querySelectorAll('.nav-links li');
const pages = document.querySelectorAll('.content-tab');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');

        navLinks.forEach(l => l.classList.remove('active-tab'));
        link.classList.add('active-tab');

        pages.forEach(page => {
            page.classList.remove('current');
            if (page.id === targetPage) {
                page.classList.add('current');
            }
        });
        window.scrollTo(0, 0); // Mobile page switch par scroll up karega
    });
});
