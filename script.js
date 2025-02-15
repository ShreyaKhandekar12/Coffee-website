let menuOpenButton = document.querySelector("#menu-open-button");
let menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click",()=>menuOpenButton.click());


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spacebetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  
  });