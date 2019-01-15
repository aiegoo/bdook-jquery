const log = consle.log;
var pos = $("#box1").css("margin-top");
var tar = Number(pos.replace("px", "")) + 200;
log(pos, tar);
$("#bt1").click(function(){
/* 	$("#box1").stop().fadeToggel(1000); */
/* 
	$("#box1").animate({
			marginTop: '9rem',
			opacity: '0',
	} */

$("#bt1").click(function(){
	if($("#box1").css("margin-top") == pos) {
		$("#box1").stop().animate({"margin-top":tar+"px"});
	}
	else {
		$("#box1").stop().animate({"margin-top":pos});
	}
});
});