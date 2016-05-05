$(document).ready(function(){
	$('img').mouseover(function(){

		$(this).fadeOut("slow", function(){
			//nothing really needs to be here
		});
	});

	$('p').click(function(){

		$(this).toggleClass("serif", function(){
			//this should change the text style
		});
	});

});