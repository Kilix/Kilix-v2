$(function(){
	$('.toggle-menu').on('click',function(){
	$('.nav-links-wrapper').removeClass('nav-links-hidden');
		$('.site-wrapper').toggleClass('unfolded');
		window.setTimeout(function(){
			if(!$('.site-wrapper').hasClass('unfolded')) {
				$('.nav-links-wrapper').addClass('nav-links-hidden');
			}
		}
		,605);
	});
});