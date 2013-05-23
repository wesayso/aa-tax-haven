var HACKSHOWAFTER = 20; // Time to automatically show hack after, in seconds
var triggerOffsetTimeout = $('.hacktrigger').offset();

$(function(){
	// Hide hack to begin with
	$('.hack').slideUp();
	var currentState = "closed";


	$(window).scroll(function() {
		var top = $(document).scrollTop();
		// get offset of locations, our trigger element for the hack
		var triggerOffset = $('.hacktrigger').offset();

		if (top > triggerOffset.top - 266 && currentState == "closed") { //the -266 means that the slidedown is triggered at the point the top of the How it works section hits the top of the screen
			$('.hack').slideDown();
			currentState = "open";
		}
        
        if ((top < triggerOffset.top - 266 && currentState == "open")) {
			//currentState = "closed";
			$('.hack').slideUp();
			currentState = "closed";
		}
	});


	

	// After X seconds, automatically scroll to and show hack
	var hacktimeout = setTimeout(function(){
		$('body,html').animate({scrollTop: triggerOffsetTimeout.top}, 800, 'swing', function(){
			$('.hack').slideDown();
		});		
	}, HACKSHOWAFTER * 1000);

	// Crossfade images
	$(function(){
	    $('.fadein img:gt(0)').hide();
	    setInterval(function(){
	      $('.fadein :first-child').fadeOut()
	         .next('img').fadeIn()
	         .end().appendTo('.fadein');},
	      3000);
	});
	
	/* Expand / hide sections */
    $("a.expand").click(function(e) {
		e.preventDefault();
        $(this).siblings('.hidden-post').slideToggle();
        $(this).toggleClass('expanded');
    });

    $("a.expand").click(function(e) {
        if($(this).hasClass('expanded')) {
            $(this).text('hide');
        } else {
            $(this).text('View all');
        }
    });
});