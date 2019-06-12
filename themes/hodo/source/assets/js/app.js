$(function() {



	// @todo: play behaviour on post pages
	$('#post .btn-play').click(function(e){
		$('#post .embed-responsive').slideDown('slow', function(){
			// Play the video

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