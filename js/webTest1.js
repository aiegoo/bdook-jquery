  
$(".nav>li").on("mouseover",function() {
	if($(this).children(".submenu").length > 0) {
		$(this).children(".submenu").stop().slideDown(500);
		/* $(".submenu", this).stop(true,true) */
	}
}).on("mouseleave",function(){
	$(".submenu", $(this)).stop().slideUp(500);
});