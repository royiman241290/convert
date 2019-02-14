$(document).ready(function () {

	// Scroll to the desired section on click
	function scrollToSection(event) {
		event.preventDefault();
		var $section = $($(this).attr('href'));
		$('html, body').animate({
			scrollTop: $section.offset().top
		}, 800);
	}
	$('[data-scroll]').on('click', scrollToSection);


	//close navigation on each navlink
	$('.navbar-collapse a').click(function (e) {
		$('.navbar-collapse').collapse('toggle');
	});


});
