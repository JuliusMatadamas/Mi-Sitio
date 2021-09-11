/*===== MENU SHOW & HIDDEN =====*/
const navMenu = document.querySelector("#nav-menu"),
        toggleMenu = document.querySelector("#nav-toggle"),
        closeMenu = document.querySelector("#nav-close");

// SHOW MENU
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

// HIDE MENU
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});
