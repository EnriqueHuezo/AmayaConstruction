const hamburguer_menu = document.querySelector(".hamburguer");
const navbarMobile = document.querySelector(".mobile-menu");
let isOpen = false;

hamburguer_menu.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        navbarMobile.classList.add('open');
        document.body.classList.add('no-scroll');
    } else {
        navbarMobile.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
});


const navbar = document.querySelector(".encabezado-normal");

window.addEventListener("scroll", function () {
    if (window.scrollY <= 0) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "#121212";
    }
});
