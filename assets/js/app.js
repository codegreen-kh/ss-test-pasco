$(document).ready(function(){
	$(document).foundation();
	$('.bxslider').bxSlider();
	$('.main-menu').find('li.menu-item').click(function(){
		$('.main-menu').find('li.menu-item').removeClass('active-item');
		$(this).addClass('active-item');
	});
});
