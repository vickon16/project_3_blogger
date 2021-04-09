

$(document).ready(function(){

    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse");

    // Click event on toggle menu

    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })


    //owl carousel for blog 
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        dots:false,
        nav:true,
        navText: [$(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next")],
        // responsiveClass:true,
        responsive:{
            0:{
                items:1,
                center:true
            },
            500:{
                items:2,
            },
            700:{
                items:2,
                loop:true,
            },
            900:{
                items:3,
                loop:true,
            },
            1400:{
                items:3,
                loop:true,
            }

        }

    });

    // click to scroll top
    $(".move-up span").click(() => {
        $("html, body").animate({scrollTop:0}, 1000);
    })


    // initializing Animation on Scroll
    AOS.init();
        





})

