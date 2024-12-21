// 영상 슬라이더
const swiperVideo = new Swiper(".swiper-video", {
  direction: "horizontal", // 슬라이드 방향 (horizontal)
  loop: false, // 무한 반복 해제
  autoplay: {
    delay: 3000, // 자동 슬라이드 시간 간격 (ms)
    disableOnInteraction: false, // 사용자가 슬라이더를 조작해도 자동 슬라이드 유지
  },
  navigation: {
    nextEl: ".swiper-video .swiper-button-next",
    prevEl: ".swiper-video .swiper-button-prev",
  },
});
