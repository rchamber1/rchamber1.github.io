$( document ).ready(function() {

    console.log("jQuery working!");

    $(".design-projects").hide();
    var toggle = 1;

    $("#toggle-btn").click(function() {

        if(toggle>0){
            $(".design-projects").show();
            $(".technical-projects").hide();
            toggle=0;
        }
        else{
            $(".technical-projects").show();
            $(".design-projects").hide();
            toggle=1;
        }
        $(".intro").hide();
    });

});
