var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    // when window width is >= 640px
    540: {
      slidesPerView: 2,
    }
  }
});

var menuButton = document.querySelector('.menu-buttom');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
 // console.log('Клик по кнопке');
 menuButton.classList.toggle('menu-buttom-active');
 menu.classList.toggle('header-active');

})