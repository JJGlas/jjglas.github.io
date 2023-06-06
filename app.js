// targeting the list of navabr links to get a java script animation going
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// toggle the drop down list aniamtion when the threebars are clicked on
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



/*underline active navbar link https://youtu.be/HpjW9eaFLIg
document.querySelectorAll('.nav-links').forEach
(link =>{
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})
*/

//Image Gallery
let galleryImages = document.querySelectorAll('.box');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
    image.onclick = function() {

        getLatestOpenedImg = index + 1;
        //letting the container be the entire site aka documet body.
        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute('class', 'img-window');
        newImgWindow.setAttribute('onclick', 'closeImg()');
    }
})

//
function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
}

//close image in gallery by clicking on it
function changeImg(change) {

}