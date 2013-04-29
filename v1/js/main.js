$(document).ready(function(){
	
	$('.hack').slideUp();
	var currentState = "closed";
    
    $(document).scroll(function() {

        var top = $(document).scrollTop();
		
		console.log(top);		

		if ((top > 1600 && currentState == "closed")) {
			currentState = "open";	
			$('.hack').slideDown();
		}
        
        if ((top < 1600 && currentState == "open")) {
			currentState = "closed";
			$('.hack').slideUp();
		}
	        
    });
});
