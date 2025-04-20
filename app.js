// targeting the list of navabr links to get a java script animation going
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const body = document.body;

// Toggle the mobile menu and lock scroll
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    // Lock/unlock body scroll
    if (menuLinks.classList.contains('active')) {
        body.classList.add('lock-scroll');
    } else {
        body.classList.remove('lock-scroll');
    }
});

