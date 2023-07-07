// targeting the list of navabr links to get a java script animation going
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
//const lockScroll = document.querySelector('body')

// toggle the drop down list aniation when the three bars are clicked on
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    //lockScroll.classList.toggle('lock-scroll');
});


/*
if ($('#mobile__menu').is(':visible')) {
    $('body').addClass("fixed-position");
} else {
    $('body').removeClass("fixed-position");
}
*/
/*
lockScroll {
    document.body.classList.toggle('lock-scroll');
}
*/