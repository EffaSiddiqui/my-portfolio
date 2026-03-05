const navLinks = document.querySelectorAll('.nav-links li');
const pages = document.querySelectorAll('.content-tab');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');

        // Nav UI update karein
        navLinks.forEach(l => l.classList.remove('active-tab'));
        link.classList.add('active-tab');

        // Pages switch karein
        pages.forEach(page => {
            page.classList.remove('current');
            if (page.id === targetPage) {
                page.classList.add('current');
            }
        });
    });
});
