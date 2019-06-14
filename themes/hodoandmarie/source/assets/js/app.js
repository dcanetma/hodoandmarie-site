$(function() {
	// Play behaviour on post pages
	$('#post .btn-play').click(function(e){
		// Play the video
	  // Select with the `<iframe>`’s id '#video'
		var player = new Vimeo.Player('video');
		player.play();    
		// Show the video & Hide the image header, simultaneously
		$('#post .embed-responsive').slideDown('slow', function(){
		});
		$('#post img.header').slideUp('slow', function(){
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