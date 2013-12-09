$(function(){
	$('.toggle-menu').on('click',function(){
	$('.nav-links-wrapper').removeClass('nav-links-hidden');
		$('body').toggleClass('unfolded');
		window.setTimeout(function(){
			if(!$('body').hasClass('unfolded')) {
				$('.nav-links-wrapper').addClass('nav-links-hidden');
			}
		}
		,605);
	});
});