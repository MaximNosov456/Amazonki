$(function () {
  $(".hamburger, .menu__list-link").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".menu").toggleClass("active");
  });

  $(".menu").on("click", function (e) {
    e.preventDefault();
    const id = $(e.target).attr("href");
    const top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  const swiper = new Swiper(".swiper-experts", {
    loop: true,
    navigation: {
      nextEl: ".swiper-experts-next",
      prevEl: ".swiper-experts-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      544: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
