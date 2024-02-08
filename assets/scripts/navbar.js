document.addEventListener("DOMContentLoaded", function () {
    const navBarContainer = document.querySelector('.header-container');
    const navBarContent = document.querySelector('.nav-container');
    const currentPath = window.location.pathname;
  
    if (currentPath !== "/index.html" && currentPath !== "/") {
      navBarContainer.classList.add('scroll');
      navBarContent.classList.add('new-width');
      navBarContainer.classList.add('sticky');
    } else {
      const toggleNavbar = () => {
        if (window.scrollY > 10) {
          navBarContainer.classList.add('scroll');
          navBarContent.classList.add('new-width');
        } else {
          navBarContainer.classList.remove('scroll');
          navBarContent.classList.remove('new-width');
        }
      };
  
      window.addEventListener('scroll', toggleNavbar);
      toggleNavbar();
    }
  
    const hamburguer_menu = document.querySelector(".hamburguer");
    const sidebarButton = document.querySelector(".hamburguer-sidebar");
    const navbarMobile = document.querySelector(".menu-mobile");
    const overlay = document.querySelector(".overlay");
    let isOpen = false;
  
    function toggleMenu() {
      isOpen = !isOpen;
      navbarMobile.classList.toggle('open', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
      overlay.classList.toggle('active', isOpen);
    }
  
    hamburguer_menu.addEventListener('click', toggleMenu);
    sidebarButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  });

