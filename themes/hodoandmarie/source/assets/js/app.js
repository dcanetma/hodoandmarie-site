$(function() {
	// Play behaviour on post pages
	$('.post-full .btn-play').click(function(e){
		// Play the video
	  // Select with the `<iframe>`’s id '#video'
		var player = new Vimeo.Player('video');
		player.play();    
		// Show the video & Hide the image header, simultaneously
		$('.post-full img.header').fadeOut('slow', function(){
			$('.post-full .intro').toggleClass('intro-played');
			$('.post-full .embed-responsive').fadeIn('slow');
		});
	});
});
$(document).ready(function(){
	// Homepage - projects
	// We want to stop the videos from playing when they're
	// not visible to the user in order to lighten up the CPU

	var viewportCheckerSettings = {
   	classToAdd: 'in-viewport', 
    // classToAddForFullView: 'in-viewport-full', 
    removeClassAfterAnimation: true,
    repeat: true,
    offset: 200,
    invertBottomOffset: false,
	 	callbackFunction: function(elem, action){
	 		if (action === 'add') {
		 		// $(elem).addClass('in-viewport-custom');
		 		$('video', elem).attr('loop', 'loop');
		 		$('video', elem).attr('autoplay', 'autoplay');
	 		}
	 		else if (action === 'remove') {
		 		// $(elem).removeClass('in-viewport-custom');
		 		$('video', elem).removeAttr('loop');
		 		$('video', elem).removeAttr('autoplay');
	 		}
	 	}
	 };

	$('.post-preview-video').viewportChecker(viewportCheckerSettings);
	$('.gallery-video p').viewportChecker(viewportCheckerSettings);

});
