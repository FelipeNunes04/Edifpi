 $(document).ready(function () {
   if ((window.screen.availWidth < 479))
       document.getElementById("img").src = "images/slider/bg1_mobile.png";
   else
       document.getElementById("img").src = "images/slider/bg1.png";
})