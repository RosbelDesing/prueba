//Control del menu y capa transparente
const btnToggle = document.getElementById("btn-toggle");
const navMenu = document.querySelector(".nav-bar");
const allLink = document.querySelectorAll(".menu-link");
const layerBlack = document.querySelector(".layer");

btnToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  layerBlack.classList.toggle("layer-on");
});

allLink.forEach((item) => {
  item.addEventListener("click", function () {
    navMenu.classList.remove("active");
    layerBlack.classList.remove("layer-on");
  });
});

//Control de transprencia MENU
window.addEventListener("scroll", function(){
  var header = document.querySelector(".header-container");
  header.classList.toggle("header-black",window.scrollY>70);
})

//Fade
// window.addEventListener('scroll', function()  {
//     let elements = document.getElementsByClassName('fade');
//     let screenSize = window.innerHeight;
    
//       for(var i = 0; i < elements.length; i++) {
//         let element = elements[i];
  
//         if(element.getBoundingClientRect().top < screenSize) {
//           element.classList.add('visible');
//         } else {
//           element.classList.remove('visible');
//         }
//       }
//   });


//Salvas

