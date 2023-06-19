/*underline active link YT: https://youtu.be/JkuiKeNS2mg looks at current page of whatever page we are viewing*/
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
  /*else(${activePage} == link(1);)*/
  /*if(link.href == null){
    ${activePage} == link(1);
  }*/ 
})


