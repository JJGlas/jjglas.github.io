/*underline active link YT: https://youtu.be/JkuiKeNS2mg looks at current page of whatever page we are viewing
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})
*/
/*underline active link YT: https://youtu.be/JkuiKeNS2mg looks at current page of whatever page we are viewing*/
const navLinkEls = document.querySelectorAll('.navbar__links');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (windowPathname === navLinkPathname){
    navLinkEl.classList.add('active');
  }
});




