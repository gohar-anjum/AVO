let imgdiv = document.querySelectorAll("#mimg");
let icon = document.querySelectorAll(".icon");

for (let i = 0; i < imgdiv.length; i++) {
  imgdiv[i].addEventListener('click', () => {
    // Iterate through each icon element
    for (let j = 0; j < icon.length; j++) {
      icon[j].style.display = "initial";
    }
  });
}