const burger = document.getElementById('nav-icon4');
const sideMenu = document.getElementsByClassName('side-menu')[0];
// const dataSubmenu = document.querySelectorAll('[data-submenu]');
const subMenuLink = document.getElementsByClassName('side-menu__item--submenu');
const subMenu = document.getElementsByClassName('sub-menu');
const subMenuClose = document.getElementsByClassName('sub-menu--close');

burger.onclick = function () {
  burger.classList.toggle('open');
  sideMenu.classList.toggle('menu-active');
};

// dataSubmenu[0].onclick = function () {
//   const nextLevMenu = document
//     .getElementById(dataSubmenu[0].dataset.submenu)
//     .classList.toggle('menu-active');
// };

for (let i = 0; i < subMenuLink.length; i++) {
  subMenuLink[i].onclick = (event) => {
    event.stopPropagation();
    subMenu[i].classList.add('menu-active');
    console.log('open');
  };

  subMenuClose[i].onclick = (event) => {
    event.stopPropagation();
    subMenu[i].classList.remove('menu-active');
    console.log('close');
  };
}
