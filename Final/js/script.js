document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    menuToggle.addEventListener('click', () => {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
        header.classList.toggle('dark-theme');
        footer.classList.toggle('dark-theme');
        menuToggle.classList.toggle('dark-theme');
    });
    
});
