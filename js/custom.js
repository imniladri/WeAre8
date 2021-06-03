// Preloader On Load

$(window).on('load', function(){
	$('#preloader').css({
		"transform": "translateY(-100%)",
		"transition-delay": "0.6s"
	});
	$('.pace').css({
		"opacity": "0",
		"transform": "translate(-50%,-100%)",
		"transition-delay": "0.3s"
	});
});


// Dark Mode Theme

$('.theme_modes').click(function () {
	$('html').toggleClass('dark');
	$('body').toggleClass('dark');
	$('div.dark_mode').toggleClass('dark');
	$('div.theme_modes i').toggleClass('dark');
});


// AOS
AOS.init();


// Back Button Function
$('#btn-back').click(function (){
	window.history.back();
});


// Navbar Toggle

$(document).ready(function(){
	$(".hamburger").click(function(){
		$(".hamburger--spin").toggleClass("is-active");
	});
});


// Audio Music Toggle
$.i = true;
$('.audio').click(function (){
	$('.audio').toggleClass('boombox');
	if ($.i) {
		$('audio').trigger('play');
		$.i = false;
	}
	else {
		$('audio').trigger('pause');
		$.i = true;
	}
});


// Text Animation (gallery.html) (anime.js)

var textWrapper = document.querySelector('.head');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
	targets: '.head .letter',
	scale: [4,1],
	opacity: [0,1],
	translateZ: 0,
	easing: "easeOutExpo",
	duration: 950,
	delay: (el, i) => 70*i
  }).add({
	targets: '.head',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
  });
