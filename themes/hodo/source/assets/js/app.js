$(function() {



	// @todo: play behaviour on post pages
	$('#post .btn-play').click(function(e){
		$('#post img.header').fadeTo('slow', 0.1, function(){
				$(this).hide(function(){
					$('#post .embed-responsive').show();
				});
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