window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    $('#navbar img').attr('src', './images/WhitePrint.svg')
    navbar.classList.remove("container")
    navbar.classList.remove("mt-4")
    navbar.classList.remove("mb-5")
    } else {
    navbar.classList.remove("sticky");
    $('#navbar img').attr('src', "./images/IntechLogo.svg")
    navbar.classList.add("container")
    navbar.classList.add("mt-4")
    navbar.classList.add("mb-5")
    }
}

$(document).ready(() => {

    $('#slideshow .slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>' 
    });
    });




