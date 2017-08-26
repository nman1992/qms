$(document).ready(function(){
	$(".signin-link").click(function(){
		$("#mobile-menu-functions-id").slideUp("fast");
		$(".feature-portion").hide("fast");
		$("#signin-portion").show(500);
	});
	$(".signup-link").click(function(){
		$("#mobile-menu-functions-id").slideUp("fast");
		$(".feature-portion").hide("fast");
		$("#signup-portion").show(500);
	});
	$(".go-home").click(function(){
		$(".feature-portion").hide("fast");
		$(".service-image-portion").show(500);
	});
	$("#receive-password-link").click(function(){
		$(".feature-portion").hide("fast");
		$("#receive-password-portion").show(500);
	});

	$("#receive-password-form").submit(function(e){
		e.preventDefault();
		$("#reset-password-success-dialog").show(500);
	});
	$("#close-receive-password-dialog").click(function(){
		$("#reset-password-success-dialog").hide(500);
		$(".feature-portion").hide("fast");
		$("#enter-reset-codes").show(500)
	});
	$(document).scroll(function(){
		var pixel = $("body").height();
		$(".user-side-bar").animate({height: pixel}, 500);
	});
});