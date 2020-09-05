$(function () {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 70,
        centeredSlides: true,
        clickable: true,
        infinite: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            960:{
                slidesPerView: 1,
                spaceBetween:50,
                centeredSlides: true,
                clickable: true,
            },
            1370: {
              slidesPerView: 1,
              centeredSlides: true,
              clickable: true,
            },
            1650: {
                slidesPerView: 1,
                centeredSlides: true,
                clickable: true,
                },
          }
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
});
$(function() {
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     spaceBetween: 70,
    //     breakpoints: {
    //         960:{
    //             slidesPerView: 1.5,
    //             spaceBetween:50,
    //             centeredSlides: true,
    //             clickable: true,
    //         },
    //         1370: {
    //           slidesPerView: 2.5,
    //           centeredSlides: true,
    //           clickable: true,
    //         },
    //         1650: {
    //             slidesPerView: 3,
    //             centeredSlides: true,
    //             clickable: true,
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //               },
    //             },
            
    //       }
    //   });

});