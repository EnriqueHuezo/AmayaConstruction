const hamburguer_menu = document.querySelector(".hamburguer");
const navbar = document.querySelector(".mobile-menu");
let isOpen = false;

hamburguer_menu.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        navbar.classList.add('open');
        document.body.classList.add('no-scroll');
    } else {
        navbar.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
});