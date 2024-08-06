
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImageIndex = 0;

function changeImage() {
    const header = document.querySelector('header');
    header.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds
