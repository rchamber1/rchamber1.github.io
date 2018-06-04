$(document).ready(() => {
  console.log("JQuery working!");
  $("#secretMessage").hide();
  //const database = firebase.database();

  $("#likeButton").click(() => {
    console.log("Like button clicked.");
    if(localStorage.getItem("totalLikes")){
      let tempVar = parseInt(localStorage.getItem("totalLikes")) + 1;
      localStorage.setItem("totalLikes", tempVar);
    }
    else {
      localStorage.setItem("totalLikes", 1);
    }
    $("#secretMessage").html("Thanks for the like!");
    $("#secretMessage").show().delay(1000).fadeOut();

    /* database.ref('likeButton/').once('value', (snapshot) => {
      const data = snapshot.val();
      if(data) {
        //increment the value
        const newData = data.totalLikes + 1;
        database.ref('likeButton').set({totalLikes: newData});
      }
      else {
        // initialze the database location
        database.ref('likeButton').set({totalLikes: 1});
      }
      */

    });

  /*$("#resetLikesButton").click(() => {
    database.ref('likeButton/').remove();
  });*/

});
