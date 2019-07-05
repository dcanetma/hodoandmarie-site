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

	// We want to play/stop the videos from playing when they're
	// visible, or not, to the user in order to lighten up the CPU
	var viewportCheckerSettings = {
   	classToAdd: 'in-viewport', 
    classToAddForFullView: 'in-viewport-full', 
    removeClassAfterAnimation: true,
    repeat: true,
    offset: 0,
    invertBottomOffset: false,
	 	callbackFunction: function(elem, action){
	 		// @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
	 		// First of all set 'loop' attribute for the
	 		// the desired play mode
	 		var video = $('video', elem);
	 		if (action === 'add') {
		 		// video.attr('autoplay', 'autoplay');
		 		video.attr('loop', 'loop');
		 		// Next, play the video
		 		if (video.get(0).paused) {
				  try {
			 			// Play the video
				    // console.log('play the video')
				    video.get(0).play();
				  } catch(err) {
				  	// Say something
				  }		 			
		 		}
	 		} else if (action === 'remove') {
		 		// When the video exits the viewport
		 		// we pause it.
	 			if (!video.get(0).paused) {
		 			// Stop the video
	 				video.get(0).pause();
			    // console.log('stop the video')
	 			}
	 		}
	 	}
	 };
 	// Homepage - projects videos
	$('.post-preview-video').viewportChecker(viewportCheckerSettings);
	// Projects - content video 
	$('.gallery-video p').viewportChecker(viewportCheckerSettings);

});
