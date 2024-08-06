var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 14500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let time = 0;
let cue = document.querySelector(".ssr h1");
const interval = setInterval(()=> {
    if (time <= 400) { 
      cue.innerHTML = `${time}`;
      time++;
    } else {
      clearInterval(interval);
    }
}, 6);
let start = 0;
let cue2 = document.querySelector(".ssr2 h1")
const timeinterval = setInterval(()=> {
    if(start<=21){
        cue2.innerHTML=`${start}`;
        start++;
    }
    else{
        clearInterval(timeinterval);
    }

}, 6)