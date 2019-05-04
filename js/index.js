$(function () {
    var x = 0;
    window.setInterval(function () {
        if (x == 0) {
            $("#changing-text").fadeOut(50, function () {
                $("#changing-text").text("originalidad").fadeIn(200);
            });
            x = 1;
        } else if (x == 1) {
            $("#changing-text").fadeOut(50, function () {
                $("#changing-text").text("minimalismo").fadeIn(200);
            });
            x = 2;
        } else {
            $("#changing-text").fadeOut(50, function () {
                $("#changing-text").text("creatividad").fadeIn(200);
            });
            x = 0;
        }
    }, 3000);
    $("#school_projects").click(function () {
        $("html, body").animate({
            scrollTop: $("#school-projects").offset().top
        }, 700);
    });
    $("#designs").click(function () {
        window.open("https://github.com/Barraguesh/Designs");
    });
    $("#designs").click(function () {
        window.open("https://github.com/Barraguesh/Projects");
    });
});