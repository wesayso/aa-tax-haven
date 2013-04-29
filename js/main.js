
$(document).ready(function(){
	// AA Hack	
	$('.hack').slideUp();
	var currentState = "closed";

	$(document).scroll(function() {

		var top = $(document).scrollTop();
		
		console.log(top);		

		if ((top > 1600 && currentState == "closed")) {
			currentState = "open";	
			$('.hack').slideDown();
		}

		if ((top < 1400 && currentState == "open")) {
			currentState = "closed";
			$('.hack').slideUp();
		}

	});

	// Crossfade images
	$(function(){
	    $('.fadein img:gt(0)').hide();
	    setInterval(function(){
	      $('.fadein :first-child').fadeOut()
	         .next('img').fadeIn()
	         .end().appendTo('.fadein');},
	      3000);
	});
});

