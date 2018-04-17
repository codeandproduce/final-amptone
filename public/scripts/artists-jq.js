$(document).ready(function(){

	$(".artist-block").hover(function(){
		var id = this.id;
		var c = $("#"+id).children();
		$(c[1]).css("opacity","0.4");
	},function(){
		var id = this.id;
		var c = $("#"+id).children();
		$(c[1]).css("opacity","0");
	});
});
