$( document ).ready(function() {

    console.log("jQuery working!");

    var toggle = 0;
    $(".design-projects").hide();

    $("#toggle-btn").click(function() {
        if(toggle > 0) {
            $(".design-projects").hide();
            $(".technical-projects").show();
            toggle = 0;
        }
        else {
            $(".design-projects").show();
            $(".technical-projects").hide();
            toggle = 1;
        }

    });
});
