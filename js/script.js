$(document).ready(function () {
    $('#hamburger-menu').on('click', function () {
        $('#nav-menu').toggleClass('active');
    });
});

// LOGO LEGO CAMBIO IMAGEN
var logo = $("#logolego");

logo.hover(
    function() {
    $(this).attr("src", "img/LEGO_logo.svg.png");
    },
    function() {
        $(this).attr("src", "img/logo_navidad.jpg");
    }
);

// EFECTO GALERÍA
ScrollReveal().reveal(".grid-wrapper > div", {
    delay: 200,
    distance: "50px",
    interval: 100,
    origin: "bottom",
    scale: 0.9,
});

// AOS
AOS.init();

// SLIDER JQUERY
$(document).ready(function(){
  
    var interval = window.setInterval(rotateSlides, 3000)
    
    function rotateSlides(){
      var $firstSlide = $('#carousel').find('div:first');
      var width = $firstSlide.width();
      
      $firstSlide.animate({marginLeft: -width}, 1000, function(){
        var $lastSlide = $('#carousel').find('div:last')
        $lastSlide.after($firstSlide);
        $firstSlide.css({marginLeft: 0})
      })
    }
  
  })
