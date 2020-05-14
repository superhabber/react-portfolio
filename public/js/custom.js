
$(window).on('load', function () {

	"use strict";

	$("#loader").delay(100).fadeOut();
	$("#loader-wrapper").delay(100).fadeOut("fast");


});


$(window).on('scroll', function () {

	"use strict";

	/*----------------------------------------------------*/
	/*	Navigtion Menu Scroll
	/*----------------------------------------------------*/

	var b = $(window).scrollTop();

	if (b > 72) {
		$(".navbar").addClass("scroll");
	} else {
		$(".navbar").removeClass("scroll");
	}

});


$(document).ready(function () {

	"use strict";


	/*----------------------------------------------------*/
	/*	Mobile Menu Toggle
	/*----------------------------------------------------*/

	if ($(window).width() < 769) {
		$('.navbar-nav li.nav-item.nl-simple').on('click', function () {
			$('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navbarSupportedContent').removeClass("show");
		});
	}


	/*----------------------------------------------------*/
	/*	Hero Fullscreen Slider
	/*----------------------------------------------------*/

	$("#slides").superslides({
		play: 4500,
		animation: "fade",
		pagination: true
	});


	/*----------------------------------------------------*/
	/*	Hero Text Rotator
	/*----------------------------------------------------*/

	$('.hero-slider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,
		slideshowSpeed: 5500,
		animationSpeed: 1500,
		start: function (slider) {
			$('body').removeClass('loading');
		}
	});


	/*----------------------------------------------------*/
	/*	Hero Images Rotator
	/*----------------------------------------------------*/

	var owl = $('.images-holder');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		dots: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: false,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$('.animated').appear(function () {

		var elem = $(this);
		var animation = elem.data('animation');

		if (!elem.hasClass('visible')) {
			var animationDelay = elem.data('animation-delay');
			if (animationDelay) {
				setTimeout(function () {
					elem.addClass(animation + " visible");
				}, animationDelay);

			} else {
				elem.addClass(animation + " visible");
			}
		}

	});


	$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = jQuery(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
		}, 'slow', 'easeInSine', function () {
			window.location.hash = '1' + target;
		});

	});


	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/

	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 600, // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		};

		var o = $.extend({}, defaults, options),
			scrollId = '#' + o.scrollName;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');

		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).text(o.scrollText);
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({ 'display': 'none', 'position': 'fixed', 'z-index': '2147483647' });

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='" + o.scrollName + "-active'></div>");
			$(scrollId + "-active").css({ 'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '2147483647' });
		}

		// Scroll function
		$(window).on('scroll', function () {
			switch (o.animation) {
				case "fade":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
					break;
				case "slide":
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
					break;
				default:
					$(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
			}
		});

		// To the top
		$(scrollId).on('click', function (event) {
			$('html, body').animate({ scrollTop: 0 }, o.topSpeed);
			event.preventDefault();
		});

	};

	$.scrollUp();


	/*----------------------------------------------------*/
	/*	Hero Typed Text
	/*----------------------------------------------------*/

	$(".typed-element").typed({
		strings: ["elegant", "responsive", "functional", "creative", "modern"]
	});


	/*----------------------------------------------------*/
	/*	Portfolio Grid
	/*----------------------------------------------------*/

	// $('.grid-loaded').imagesLoaded(function () {

	//     // filter items on button click
	//     $('.portfolio-filter').on('click', 'button', function () {
	//         var filterValue = $(this).attr('data-filter');
	//         $grid.isotope({
	//           filter: filterValue
	//         });
	//     });

	//     // change is-checked class on buttons
	//     $('.portfolio-filter button').on('click', function () {
	//         $('.portfolio-filter button').removeClass('is-checked');
	//         $(this).addClass('is-checked');
	//         var selector = $(this).attr('data-filter');
	//         $grid.isotope({
	//           filter: selector
	//         });
	//         return false;
	//     });

	//     // init Isotope
	//     var $grid = $('.masonry-wrap').isotope({
	//         itemSelector: '.portfolio-item',
	//         percentPosition: true,
	//         transitionDuration: '0.7s',
	//         masonry: {
	//           // use outer width of grid-sizer for columnWidth
	//           columnWidth: '.portfolio-item',
	//         }
	//     });

	// });

	/*----------------------------------------------------*/
	/*	Rotator OwlCarousel
	/*----------------------------------------------------*/

	var owl = $('.images-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		nav: true,
		dots: false,
		navText: ['<', '>'],
		navBy: 1,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1500,
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-holder');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: false,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-logo-holder');
	owl.owlCarousel({
		items: 6,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 2
			},
			640: {
				items: 3
			},
			767: {
				items: 3
			},
			768: {
				items: 4
			},
			991: {
				items: 4
			},
			1000: {
				items: 5
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.statistic-number').each(function () {
		$(this).appear(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}, { accX: 0, accY: 0 });
	});


	/*----------------------------------------------------*/
	/*	Animated Progress Bar
	/*----------------------------------------------------*/
	// var delay = 500;
	// $(".progress-bar").each(function(i){
	//     $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

	//     $(this).prop('Counter',0).animate({}, {
	//         duration: delay,
	//         easing: 'swing',
	//         step: function (now) {
	//             $(this).text(Math.ceil(now)+'%');
	//         }
	//     });
	// });


	/*----------------------------------------------------*/
	/*	Testimonials Rotator Flexslider
	/*----------------------------------------------------*/

	$('#reviews-1 .flexslider').flexslider({
		animation: "fade",
		controlNav: true,
		directionNav: false,
		slideshowSpeed: 5000,
		animationSpeed: 2000,
		start: function (slider) {
			$('body').removeClass('loading');
		}
	});


});