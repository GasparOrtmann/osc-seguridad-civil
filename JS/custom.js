var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1000: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        484: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        280: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },


    navigation: {
        nextEl: "#swiper-button-next-1",
        prevEl: "#swiper-button-prev-1",
    },

    autoplay: {
        delay: 3000,
      },

      loop: true,
});
