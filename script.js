document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "#F4A764"; 
});

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    on: {
        transitionEnd: function(){
          let activeSlide = document.querySelector('.swiper-slide-active:not(.swiper-slide-duplicate)');
          if (activeSlide){
            let bgColor = activeSlide.getAttribute('data-bg');
            if(bgColor){
              document.body.style.transition = 'background-color 0.5s ease';
              document.body.style.background = bgColor;
            }
          }
        }
    }
});