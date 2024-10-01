const swiper = new Swiper('.swiper', {


    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
  
    // Breakpoints for responsive layout
    breakpoints: {
      600: { // Devices with width >= 600px
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: { // Devices with width >= 1000px
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  
    //pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
