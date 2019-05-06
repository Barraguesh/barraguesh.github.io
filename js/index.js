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
        } else if (x == 2) {
            $("#changing-text").fadeOut(50, function () {
                $("#changing-text").text("dedicación").fadeIn(200);
            });
            x = 3;
        } else {
            $("#changing-text").fadeOut(50, function () {
                $("#changing-text").text("creatividad").fadeIn(200);
            });
            x = 0;
        }
    }, 3000);
    $("#school_projects_card").click(function () {
        $("html, body").animate({
            scrollTop: $("#school_projects").offset().top
        }, 800);
    });
    $("#goals_card").click(function () {
        $("html, body").animate({
            scrollTop: $("#goals").offset().top
        }, 900);
    });
    $("#projects").click(function () {
        window.open("https://github.com/Barraguesh/Projects");
    });
    $("#designs").click(function () {
        window.open("https://github.com/Barraguesh/Designs");
    });
});
