// // самовызывающаяся функция
// (function () {
//   // находит первый элемент с селектором который я передам
//   const header = document.querySelector(".header");
//   window.onscroll = () => {
//     // расчитывает расстояние скрола по Y
//     if (window.pageYOffset > 50) {
//       header.classList.add("header_active");
//     } else {
//       // Если мы вернулись в начало то удалить
//       header.classList.remove("header_active");
//     }
//   };
// })();

// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseOtem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll('.header__link')
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav-active");
  });
  menuCloseOtem.addEventListener("click", () => {
    menu.classList.remove("header__nav-active");
  });
  if(window.innerWidth <= 767){
    for(let i = 0; i < menuLinks.length; i++){
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove("header__nav-active");
      })

      
    }
  }
})();
