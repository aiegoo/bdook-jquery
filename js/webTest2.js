  
$("#gnb").on("mouseenter", function() {	
	$("#hdWrap").addClass("act");
});
$("#hdWrap").on("mouseleave", function(){
	$(this).removeClass("act");
})