
// auto slide
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000, //1000ms = 1s;
    autoplayHoverPause: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
        }
    }
});



// show and hide menu for mobile
function openNav() {
    document.getElementById("myNav").style.width = "60%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}