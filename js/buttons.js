$(document).ready(() => {
    console.log("jQuery working!");

    var toggle = 0;

    $("#toggle-btn").click(() => {

        if(toggle > 0){
            $(".design-projects").hide();
            $(".technical-projects").show();
            toggle = 0;
        }
        else{
            $(".design-projects").show();
            $(".technical-projects").hide();
            toggle = 1;
        }
    });
});
