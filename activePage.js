/*underline active link YT: https://youtu.be/JkuiKeNS2mg looks at current page of whatever page we are viewing
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})
*/
/*underline active link YT: https://youtu.be/JkuiKeNS2mg looks at current page of whatever page we are viewing. may want to replace .navbar__links with nav a*/
const navLinkEls = document.querySelectorAll(".navbar__links");
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (windowPathname === navLinkPathname){
    navLinkEl.classList.add('active');
  }
});

/*other method on YT: https://youtu.be/mP2LnkOqLHk
let links = document.querySelectorAll(".navbar__links");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}
*/


