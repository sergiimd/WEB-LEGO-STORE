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


// SLIDER SLICK

  








