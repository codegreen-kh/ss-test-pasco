$(document).ready(function(){
	$(document).foundation();
	$('.bxslider').bxSlider();
	$('.main-menu').find('li.menu-item').click(function(e){
		e.preventDefault();
		$('.main-menu').find('li.menu-item').removeClass('active-item');
		$(this).addClass('active-item');
	});
	$('.sort-bar').find('a.sort-bar-button').click(function(e){
		e.preventDefault();
		$('.sort-bar').find('a.sort-bar-button').removeClass('active');
		$(this).addClass('active');
	});
	$('a[href="#"]').click(function(e){
		e.preventDefault();
		clickEffect(this);
	});

	scaleSliderContent();
});

var $el;
var elWidth;

function scaleSliderContent() {
	$el = $("div.slider-content");
	elWidth = 1920;

	var $wrapper = $("div.overlay");

	$(window).resize(function(e) {
	  doResize(e, $wrapper);
	});

	doResize(null, $wrapper);
}

function doResize(event, ui) {
	  var scale;
	  
	  var uiWidth = ui.width();
	  scale = uiWidth / elWidth;
	  
	  $el.css({
	    transform: "scale(" + scale + ")",
	    width: "100%",
	    height: "100%",
	    position: "relative",
	    top: "0",
	    paddingTop: (287 * scale) + 'px',
	    paddingBottom: (287 * scale) + 'px'
	  });
}

function clickEffect(ui){
    $(ui).fadeOut(100).fadeIn(100);
    $(ui).css({outline: 0});
}
