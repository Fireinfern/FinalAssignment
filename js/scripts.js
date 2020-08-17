function addShow(id, clss) {
    if (!$(id).hasClass(clss)) {
        $(id).addClass(clss);
    }
}

function removeShow(id, clss) {
    if ($(id).hasClass(clss)) {
        $(id).removeClass(clss);
    }
}

$("#homeButton").click(function () {
    if (!$("#homeButton").parent().hasClass("active")) {
        $('#aboutmeButton').parent().removeClass("active");
        $('#myprojectsButton').parent().removeClass("active");
        $('#homeButton').parent().addClass("active");
        addShow("#Home", "show");
        removeShow("#Aboutme", "show");
        removeShow("#Myprojects", "show");
        removeShow("#Contact", "show");
    }
});

$('#homeLink').click(function () {
    if (!$("#homeButton").parent().hasClass("active")) {
        $('#aboutmeButton').parent().removeClass("active");
        $('#myprojectsButton').parent().removeClass("active");
        $('#homeButton').parent().addClass("active");
        addShow("#Home", "show");
        removeShow("#Aboutme", "show");
        removeShow("#Myprojects", "show");
        removeShow("#Contact", "show");
    }
});

$("#aboutmeButton").click(function () {
    if (!$("#aboutmeButton").parent().hasClass("active")) {
        //$('#Aboutme').collapse.show();
        $('#aboutmeButton').parent().addClass("active");
        $('#myprojectsButton').parent().removeClass("active");
        $('#homeButton').parent().removeClass("active");
        addShow("#Aboutme", "show");
        removeShow("#Home", "show");
        removeShow("#Myprojects", "show");
        removeShow("#Contact", "show");
    }
});

$("#aboutmeLink").click(function () {
    if (!$("#aboutmeButton").parent().hasClass("active")) {
        //$('#Aboutme').collapse.show();
        $('#aboutmeButton').parent().addClass("active");
        $('#myprojectsButton').parent().removeClass("active");
        $('#homeButton').parent().removeClass("active");
        addShow("#Aboutme", "show");
        removeShow("#Home", "show");
        removeShow("#Myprojects", "show");
        removeShow("#Contact", "show");
    }
});

$("#myprojectsButton").click(function () {
    if (!$("#myprojectsButton").hasClass("active")) {
        $('#aboutmeButton').parent().removeClass("active");
        $('#myprojectsButton').parent().addClass("active");
        $('#homeButton').parent().removeClass("active");
        addShow("#Myprojects", "show");
        removeShow("#Home", "show");
        removeShow("#Aboutme", "show");
        removeShow("#Contact", "show");
    }
});

$("#myprojectsLink").click(function () {
    if (!$("#myprojectsButton").hasClass("active")) {
        $('#aboutmeButton').parent().removeClass("active");
        $('#myprojectsButton').parent().addClass("active");
        $('#homeButton').parent().removeClass("active");
        addShow("#Myprojects", "show");
        removeShow("#Home", "show");
        removeShow("#Aboutme", "show");
        removeShow("#Contact", "show");
    }
});