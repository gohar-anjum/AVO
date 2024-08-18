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
