
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

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

//validation
const form = document.querySelector('.contacts-form')
const fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      const error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'Cannot be blank'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
})

//popup
const openPopup = document.querySelector('.product-popup-link')
const closePopup = document.querySelector('.popup-close')

openPopup.addEventListener('click', togglePopup)
closePopup.addEventListener('click', togglePopup)

function togglePopup() {
  const popup = document.querySelector('.popup')

  const video = document.querySelector('.popup-video')

  popup.classList.toggle('popup-active')
  video.pause()
  video.currentTime()
}