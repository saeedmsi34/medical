// /////////active-border-botton-start*
const items = document.querySelectorAll(".collapse ul li")
const item2 = document.querySelectorAll(".nav-item ul li a")
const item3 = document.querySelectorAll("ul li button")

items.forEach((items) => {
  items.addEventListener("click", () => {
    document.querySelector(".active1").classList.remove("active1")
    items.classList.add("active1")

  })
})
// /////////active-border-botton-end*
// bar (x) start*
function myFunction(x) {
  x.classList.toggle("change");
}
// /////////active-color-change-start*
item2.forEach((item2) => {
  item2.addEventListener("click", () => {
    document.querySelector(".pp").classList.remove("pp")
    item2.classList.add("pp")
  })
})
// /////////active-color-change-end*
item3.forEach((item3) => {
  item3.addEventListener("click", () => {
    document.querySelector(".qq").classList.remove("qq")
    item3.classList.add("qq")
  })
})


// /////////////////////////////////////
$(window).scroll(function () {
  var currentOffSet1 = $(window).scrollTop()
  if (currentOffSet1 > 100) {
    $("#nav").css({ "background-color": "#0077ffab", "transition": "all .5s" })
    $(".btnUp").fadeIn(2000)

  }
  else {
    $("#nav").css({ "background-color": "transparent" })
    $(".btnUp").fadeOut(2000)

  }
})
// scroll-start*
$(".nav-link").click(function(){
 let currentLink=$(this).attr("href");
  let currentoffset2=currentLink.offset().top;
  $("html,body").animate({scrollTop:currentoffset2},5000)
})

// btnUp//
$(".btnUp").click(function(){
  $("body,html").animate({scrollTop:0},1000)
})

// /loading////

$(document).ready(function(){

    $(".Loadding").fadeOut(4000, function(){
        $("body").css({"overflow":"auto"})
    })
   
})




var typed = new Typed('.element',{
  strings: [" للخدمات الطبية  ", " للخدمات الطبية  "," للخدمات الطبية  "],
  typeSpeed: 200,
  backDelay: 200,
  loop: true,
  loopCount: Infinity,
  backSpeed: 100,
  smartBackspace: false // Default value
});







$('.element1').counterUp({
  delay: 100,
  time: 4000
});



























