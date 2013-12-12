$(function(){
	$('.svg-valeur').waypoint(function(direction) {
		$('.navbar').toggleClass('navbar-top');
	}, { offset: '200px' });
});