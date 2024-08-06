var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

  let time = 0; // Initialize the time variable
  let cue = document.querySelector(".ssr h1"); // Select the element
  
  // Create an interval to update the counter
const interval = setInterval(() => {
    if (time <= 400) { 
      cue.innerHTML = `${time}`;
      time++;
    } else {
      clearInterval(interval);
    }
}, 6);