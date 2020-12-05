
let slider = () => {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
      },
  });
}

export default slider;