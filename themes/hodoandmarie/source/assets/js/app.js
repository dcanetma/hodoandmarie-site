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
	// We want to play/stop the videos from playing when they're
	// not visible to the user in order to lighten up the CPU
	var viewportCheckerSettings = {
   	classToAdd: 'in-viewport', 
    classToAddForFullView: 'in-viewport-full', 
    removeClassAfterAnimation: true,
    repeat: true,
    offset: 200,
    invertBottomOffset: false,
	 	callbackFunction: function(elem, action){
	 		// @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
	 		// First of all set 'loop' attribute for the
	 		// the desired play mode
	 		var video = $('video', elem);
	 		if (action === 'add') {
		 		video.attr('loop', 'loop');
		 		video.attr('autoplay', 'autoplay');
		 		// Next, play the video
		 		// if (video.paused) {
				 //  try {
			 	// 		// Play the video
				 //    playVideo(video);
				 //  } catch(err) {
				 //  	// Say something
				 //  }		 			
		 		// }
	 		} else if (action === 'remove') {
		 		video.removeAttr('autoplay');
		 		// When the video exits the viewport
		 		// we pause it.
	 			// if (!video.paused) {
		 		// 	// Stop the video
	 			// 	video.pause();
	 			// }
	 		}

	 	}
	 };

	$('.post-preview-video').viewportChecker(viewportCheckerSettings);
	$('.gallery-video p').viewportChecker(viewportCheckerSettings);

});
