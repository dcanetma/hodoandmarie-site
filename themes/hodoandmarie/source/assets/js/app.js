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

// $(document).ready(function(){
// 	// Homepage - show titles when visible
// 	$('.post-preview').viewportChecker({
//    	classToAdd: 'in-viewport', 
//     classToAddForFullView: 'in-viewport-full', 
//     removeClassAfterAnimation: true,
//     repeat: true,
//     offset: 200,
//     invertBottomOffset: false
// 	});
// });