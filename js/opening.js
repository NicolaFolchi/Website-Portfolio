$(document).ready(function(){
	
	$("#opening_fadein").fadeIn(1000);
});


$(document).ready(function(){
	changeFont();
});

function changeFont(){
	var text = $("#my_name");
	text.css("font", "18px Consolas");
	text.css("float", "left");
	text.css("color", "#86C232");
}

$("#my_name").hover(function(){
	// var text = $("#my_name");
	// text.css.animate("background-color", "yellow");
	$("#my_name").css("background", "url(images/asfalt.png)");
})