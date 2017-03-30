// main.js

$(window).scroll(function() {
	// right now this is an anonymous function
	// because it's within "scroll" it's
	// automatically gonna get called
	console.log($(window).scrollTop());
	// create a variable called breakpoint
	var breakpoint = 100;

	if ($(window).scrollTop() >= breakpoint){
		$('.container').css('visibility',
			'visible').hide().fadeIn(2000);
		// 1500 = 1.5 seconds

		// make this only run once; cause scroll is once
		$(this).off('scroll')

	}
});
