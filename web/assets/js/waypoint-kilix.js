$(function(){
	$('.large-12').waypoint(function(direction) {
		 console.log('Top of thing hit mid viewport.');
	}, { offset: '50%' });
});