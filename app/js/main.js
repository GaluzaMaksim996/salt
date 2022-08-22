
const swiper = new Swiper('.swiper', {
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
});
