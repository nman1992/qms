$(document).ready(function() {
            $.fn.datepicker.dates['vi'];
            $('#pick-expiry-date').datepicker({
                language: 'vi'
            });
            $('#search-to-date').datepicker({
                language: 'vi'
            });
            $('#search-from-date').datepicker({
                language: 'vi'
            });

        $(".close-item").click(function() {
            $("#update-app-dialog").slideUp("fast");
            $("#app-details-dialog").slideUp("fast");
            $(".light-box").slideUp("fast");
        });
        $(".close-item-btn").click(function() {
            /*var eleId = "#" + $(".close-item").attr("id") + '-dialog';*/
            $("#update-app-dialog").slideUp("fast");
            $("#app-details-dialog").slideUp("fast");
            $(".light-box").slideUp("fast");
        });


        $(".view-app-details").click(function() {
            $("#app-details-dialog").slideDown("fast");
            $(".light-box").slideDown("fast");
        });
        $(".update-app").click(function() {
            $("#update-app-dialog").slideDown("fast");
            $(".light-box").slideDown("fast");
        });
        $("#go-to-update").click(function() {
            $("#app-details-dialog").slideUp("fast");
            $("#update-app-dialog").slideDown("fast");
        });
        
        $("#do-update-app").click(function() {
            $("#update-app-dialog").slideUp("fast");
            $(".light-box").slideUp("fast");
        });

        $("#mobile-menu").click(function(){
            $("#mobile-menu-functions-id").slideDown("fast");
            $("#desktop-menu-id").slideUp("fast");
        });

        $("#back-to-previous-screen").click(function(){
            $("#mobile-menu-functions-id").slideUp("fast");
            $("#desktop-menu-id").slideDown("fast");
            
        });

        $(".my-radio-button").click(function(){
            var ele = $(this).parent().parent().parent();
            $(ele).find("i").css("display", "none");
            $(this).find("i").css("display", "inline-block");
            $(ele).find("input").prop("checked", false);
            $(this).parent().parent().find("input").prop("checked", true);
        });

        $("#delete-app-dialog").click(function() {
            $("#update-app-dialog").slideUp("fast");
            $("#app-details-dialog").slideUp("fast");
            $("#delete-app-ensurance-dialog").slideDown("fast");
        });

        $("#do-delete-app").click(function() {
            $("#delete-app-ensurance-dialog").slideUp("fast");
            $(".light-box").slideUp("fast");
            $("#update-app-dialog").slideUp("fast");
            $("#app-details-dialog").slideUp("fast");
        });

        $("#cancel-delete").click(function() {
            $("#delete-app-ensurance-dialog").slideUp("fast");
            $("#update-app-dialog").slideUp("fast");
            $("#app-details-dialog").slideDown("fast");
        });
    });