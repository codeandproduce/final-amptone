$(document).ready(function(){
  $("#navBar").css("z-index","106");
  $("#animateBackground").css("z-index","105");
});
$(window).scroll(function(){
  var x = $(window).scrollTop();
  if(x<10){
    $('#animateBackground').css("background-color","transparent");
    $('.above-background').css('filter','invert(0%)');
  }else if($(window).scrollBottom() == 0){
    $('#animateBackground').css("background-color","#0D121C");
    $('.above-background').css('filter','invert(0%)');
  }else{
    $('#animateBackground').css("background-color","white");
    $('.above-background').css('filter','invert(100%)');
  }

});
