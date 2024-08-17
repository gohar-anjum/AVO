document.addEventListener('scroll', ()=>{
    const mainmenu = document.querySelector("#mainmenu")
    if (window.scrollY>200){
      mainmenu.classList.add('scrolled')
    }else{
      mainmenu.classList.remove('scrolled')
    }
  })
let mimg1 = document.querySelector(".mimg1");
let iconsdiv1 = document.querySelector(".mimg1 .iconsdiv");
mimg1.addEventListener('mouseenter', ()=>{
    iconsdiv1.style.visibility = 'visible';
})
mimg1.addEventListener('mouseleave', ()=>{
    iconsdiv1.style.visibility = 'hidden';
})
let mimg2 = document.querySelector(".mimg2");
let iconsdiv2 = document.querySelector(".mimg2 .iconsdiv");
mimg2.addEventListener('mouseenter', ()=>{
    iconsdiv2.style.visibility = 'visible';
})
mimg2.addEventListener('mouseleave', ()=>{
    iconsdiv2.style.visibility = 'hidden';
})
let mimg3 = document.querySelector(".mimg3");
let iconsdiv3 = document.querySelector(".mimg3 .iconsdiv");
mimg3.addEventListener('mouseenter', ()=>{
    iconsdiv3.style.visibility = 'visible';
})
mimg3.addEventListener('mouseleave', ()=>{
    iconsdiv3.style.visibility = 'hidden';
})
let mimg4 = document.querySelector(".mimg4");
let iconsdiv4 = document.querySelector(".mimg4 .iconsdiv");
mimg4.addEventListener('mouseenter', ()=>{
    iconsdiv4.style.visibility = 'visible';
})
mimg4.addEventListener('mouseleave', ()=>{
    iconsdiv4.style.visibility = 'hidden';
})
let mimg5 = document.querySelector(".mimg5");
let iconsdiv5 = document.querySelector(".mimg5 .iconsdiv");
mimg5.addEventListener('mouseenter', ()=>{
    iconsdiv5.style.visibility = 'visible';
})
mimg5.addEventListener('mouseleave', ()=>{
    iconsdiv5.style.visibility = 'hidden';
})
let mimg6 = document.querySelector(".mimg6");
let iconsdiv6 = document.querySelector(".mimg6 .iconsdiv");
mimg6.addEventListener('mouseenter', ()=>{
    iconsdiv6.style.visibility = 'visible';
})
mimg6.addEventListener('mouseleave', ()=>{
    iconsdiv6.style.visibility = 'hidden';
})
let mimg7 = document.querySelector(".mimg7");
let iconsdiv7 = document.querySelector(".mimg7 .iconsdiv");
mimg7.addEventListener('mouseenter', ()=>{
    iconsdiv7.style.visibility = 'visible';
})
mimg7.addEventListener('mouseleave', ()=>{
    iconsdiv7.style.visibility = 'hidden';
})
let mimg8 = document.querySelector(".mimg8");
let iconsdiv8 = document.querySelector(".mimg8 .iconsdiv");
mimg8.addEventListener('mouseenter', ()=>{
    iconsdiv8.style.visibility = 'visible';
})
mimg8.addEventListener('mouseleave', ()=>{
    iconsdiv8.style.visibility = 'hidden';
})
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