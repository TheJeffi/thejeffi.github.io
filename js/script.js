$(document).ready(function(){
	$(".slider").slick({
		arrows:false,
		dots:true,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:"linear",
		infinite:true,
		initialSlide:2,
		autoplay:true,
		autoplaySpeed:3000,
		pauseOnHover: false,
		pauseOnFocus: false,
		pauseOnDotsHover:true,
		dragable:false,
		swipe:false,
		waitForAnimate: true,
		centralMode:true,
		variableWidth:true,
		appendDots:('.content'),
	});
});