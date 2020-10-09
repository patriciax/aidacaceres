/*$(document).ready(function () {
    setTimeout(function () {
        $(".elipse").fadeOut(300);
    }, 3000);
});
*/

// Menú responsive
$(function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
        $(".offcanvas-collapse").toggleClass("open");
        $("body").toggleClasss("offcanvas-expanded");
    });
});

$(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
});

$(".nav-link").click(function () {
    $(".offcanvas-collapse").removeClass("open");
    $(".hamburger").toggleClass("is-active");
    $("body").removeClass("offcanvas-expanded");
});

// Menú fixed
$(window).scroll(function () {
	if ($(document).scrollTop() > 70 && $(window).width() >= 0) {
		$(".navbar-fixed-js").addClass("fixed");
		//  $("#iso").addClass('img-size').attr('src', 'assets/img/logo.png').removeClass('scroll-up');
	} else {
		$(".navbar-fixed-js").removeClass("fixed");

	}
});


/*****************banner************** */
$('.main-banner__content').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplaySpeed: 3000,
    arrows:true,
    fade: true,
    cssEase: "linear",
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,

        }
    }
    ]
});
