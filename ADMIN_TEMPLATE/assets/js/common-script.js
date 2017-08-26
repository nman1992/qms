$(".my-checkbox-box").click(function(){
	if($(this).find("i").attr("isChecked") === "true"){
		$(this).find("i").css("opacity", "0");
		$(this).find("i").attr("isChecked", "false");
		$(this).parent().parent().find("input").prop("checked", false);
	}else{
		$(this).find("i").css("opacity", "1");
		$(this).find("i").attr("isChecked", "true");
		$(this).parent().parent().find("input").prop("checked", true);
	}
	
});
