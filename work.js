document.addEventListener('scroll', ()=>{
    const mainmenu = document.querySelector("#mainmenu")
    if (window.scrollY>200){
      mainmenu.classList.add('scrolled')
    }else{
      mainmenu.classList.remove('scrolled')
    }
  })