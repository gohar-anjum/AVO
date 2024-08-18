document.addEventListener('scroll', ()=>{
  const mainmenu = document.querySelector("#mainmenu")
  if (window.scrollY>200){
    mainmenu.classList.add('scrolled')
  }else{
    mainmenu.classList.remove('scrolled')

  }
})

let menubtn1 = document.querySelector(".pages span");
  let mobilemenue1 = document.querySelector(".mobilemenu");
  let pagea = document.querySelector(".mmpages a");
document.addEventListener('scroll', ()=>{
(window.scrollY>200)
      menubtn1.addEventListener("click", () => {
      mobilemenue1.style.backgroundColor = "white"
      pagea.style.color = "black"
    }); 

    menubtn1.addEventListener("click", () => {
      mobilemenue1.style.backgroundColor = "black";
      pagea.style.color = "#fff";
    }); 
})

let menubtn = document.querySelector(".pages span");
let mobilemenue = document.querySelector(".mobilemenu");

menubtn.addEventListener("click", () => {
  if (mobilemenue.style.visibility === "visible") {
    mobilemenue.style.visibility = "hidden";
  } else {
    mobilemenue.style.visibility = "visible";
  }
});


var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let time = 0;
let cue = document.querySelector(".ssr h1");
const interval = setInterval(() => {
  if (time <= 400) {
    cue.innerHTML = `${time}`;
    time++;
  } else {
    clearInterval(interval);
  }
}, 6);
let start = 0;
let cue2 = document.querySelector(".ssr2 h1")
const timeinterval = setInterval(() => {
  if (start <= 21) {
    cue2.innerHTML = `${start}`;
    start++;
  }
  else {
    clearInterval(timeinterval);
  }

}, 6)

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    767:{
      slidesPerView: 3,
    }
  }
});

let playvideo = document.querySelectorAll(".playvideo")
for (let i = 0; i < playvideo.length; i++) {
  playvideo[i].addEventListener("click", () => {
    let videosection = document.querySelector(".videosection")
    videosection.style.display = "block";
    let crossvideo = document.querySelector(".videosection i")
    crossvideo.addEventListener("click", () => {
      let videosection = document.querySelector(".videosection")
      videosection.style.display = "none";
    })
  })
}

