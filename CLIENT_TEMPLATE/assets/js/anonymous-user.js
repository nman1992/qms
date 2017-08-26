$(document).ready(function(){
	$("#inform-anonymous-user").slideDown(500);

	/*$("#upgrade-to-normal").click(function(){
		$("#mobile-menu-functions-id").slideUp("fast");
		$(".feature-portion").hide("fast");
		$("#inform-anonymous-user").slideUp(500);
		$("#signin-portion").show(500);
	});*/

	$("#close-inform-anonymous-user").click(function(){
		$("#inform-anonymous-user").slideUp(500);
	});
});