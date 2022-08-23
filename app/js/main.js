
const swiper = new Swiper('.swiper', {

  breakpoints: {
    320: {
      direction: 'horizontal',
      pagination: {}
    },

    768: {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {
          return '<div class=' + className + ' ></div>'
        }
      },
    },
  }
});