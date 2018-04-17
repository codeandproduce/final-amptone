function noscroll() {
  window.scrollTo( 0, 0 );
}

// add listener to disable scroll
window.addEventListener('scroll', noscroll);

window.addEventListener("load", function(){
	$('.loader').css('display','none');
	window.removeEventListener('scroll', noscroll);
	$('.loader').css('z-index','0');

});
