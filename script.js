const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// var a = document.querySelector("#elem1")
// var abc = console.log(a.getAttribute("data-image"));
// console.log(abc)

function page4animation(){
    var elemC = document.querySelector("#elem-container"); // Fixed capitalization and added #
  var fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function() {
      fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function() {
      fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
    })
  })
  }
page4animation();

function swiperAnimation (){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperAnimation();


document.addEventListener("DOMContentLoaded", function() {
    let menu = document.getElementById("menu");
    let full = document.getElementById("full");
    let navimg = document.getElementById("navimg");
    let flag = 0;

    menu.addEventListener("click", function () {
        if (flag === 0) {
            full.style.top = "0"; // Show the menu
            navimg.style.opacity = "0"; // Hide the logo
            flag = 1;
        } else {
            full.style.top = "-100%"; // Hide the menu
            navimg.style.opacity = "1"; // Show the logo
            flag = 0;
        }
    });
});
