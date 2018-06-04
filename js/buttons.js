$(document).ready(() => {
  console.log("JQuery working!");

  const database = firebase.database();

  $("#likeButton").click(() => {
    console.log("Like button clicked.");
    $("#secretMessage").html("Thanks for the like!");

    database.ref('likeButton/').once('value', (snapshot) => {
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
    });
  });

  $("#resetLikesButton").click(() => {
    database.ref('likeButton/').remove();
  });

});
