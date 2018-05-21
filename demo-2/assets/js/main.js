(function($){
	"use strict"
	jQuery(document).ready(function($){
		// custom-navbar-activation
		$(".custom-navbar").on('click', function(){
			$(".main-menu ul").slideToggle(600);
		});
		$(window).on('resize', function(){
			if ($(window).width() > 768) {
				$(".main-menu ul").removeAttr("style");
			}
		});
		// smooth-scroll-activation 
		$(".main-menu ul li a").on('click', function(event){
			var linkHref = $(this).attr("href");
			var headerHeight = $(".main-menu").outerHeight();
			$("html,body").animate({
				scrollTop: $(linkHref).offset().top - headerHeight
			},2000);
			event.preventDefault();
		});
		// video-popup-activation
		$('.video-icon a').magnificPopup({
			type: 'iframe'
		});
		// progress-bar-activation
		$(".progress-bar").animate({width: "85%"},1000);
		// faq-accordion-activation
		$(".faq-accordion ul li").on("click", function(){
			var tabClass = $(this).attr("class");
			$(this).addClass("active").siblings().removeClass("active");
			$("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
		});
		// to-top-activation 
		$(window).on('scroll', function(){
			var totopVisible = $("html").scrollTop();
			if (totopVisible > 500 ) {
				$(".to-top").fadeIn();
			}
			else {
				$(".to-top").fadeOut();
			}
		});
		$(".to-top").on('click', function(){
			$('html').animate({
				'scrollTop' : '0'
			},1500);
		});
	});
	
	jQuery(window).on('load', function(){
		// site-preloader-activation
		$(".cryptonian-preloader").fadeOut(500);
		// wow-animation 
		new WOW().init();
	});
})(jQuery);