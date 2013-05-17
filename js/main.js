var HACKSHOWAFTER = 20; // Time to automatically show hack after, in seconds
var HACKPERCENTAGESHOW = 40; // Hack will show when positionned this percentage from the top of the screen, whatever that may be

function getViewportOffset() {
	var d = document, w = window, documentElement = d.documentElement

	return {
		top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
		left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
	};
}

$(function(){
	// Hide hack to begin with
	$('.hack').slideUp();

	// get offset of locations, our trigger element for the hack
	var triggerOffset = $('.hacktrigger').offset();

	// After X seconds, automatically scroll to and show hack
	//var hacktimeout = setTimeout(function(){
		//$('body,html').animate({scrollTop: triggerOffset.top}, 800, 'swing', function(){
			//$('.hack').slideDown();
		//});		
	//}, HACKSHOWAFTER * 1000);

	// Show hack when top-left point of target reaches certain percentage of screen height
	$('.hacktrigger').bind('inview', function(event, isInView, visiblePartX, visiblePartY, percentageOfHeight){

		viewportOffset = getViewportOffset();

		if(isInView == true && percentageOfHeight <= HACKPERCENTAGESHOW){
			$('.hack').slideDown();
			clearInterval(hacktimeout);
		} else {
			if(!isInView && viewportOffset.top < triggerOffset.top){
				$('.hack').slideUp()
			}
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