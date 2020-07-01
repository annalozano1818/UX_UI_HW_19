console.log("script is loaded!");

$(document).ready(function() {
    $("#my-work").on("click", function() {
        $("body,html").animate(
            {
                scrollTop: $(".myWork").offset().top
            },
            800 //speed
        );
    });
});