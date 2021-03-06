/*===== MENU SHOW & HIDDEN =====*/
const navMenu = document.querySelector("#nav-menu"),
    toggleMenu = document.querySelector("#nav-toggle"),
    closeMenu = document.querySelector("#nav-close");

// SHOW MENU
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// HIDE MENU
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// HIDE MENU ON CLICK IN A LINK
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ADD CLASS ACTIVE TO LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}