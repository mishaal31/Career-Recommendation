window.addEventListener('load', () => {
    const scrollTo = sel => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });

    document.querySelectorAll('.category-menu a, .nav a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => { e.preventDefault(); scrollTo(a.getAttribute('href')); });
    });

    if (window.location.hash) scrollTo(window.location.hash);
});
