$(document).ready(function () {

var tag = "kitty";
  var count = 4;
  var access_token = '22033045.ea9028a.eec94286a2e049429fe51c3fbc95db20';
  var access_parameters = {access_token: access_token};
  
  function grabImages(access_parameters) {
    var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + 
    '/media/recent?callback=?&count=' + count;
    
    $.getJSON(instagramUrl, access_parameters, onDataLoaded);
  }

function onDataLoaded(parameters) {
  // instagram_data.meta is where the secret messages from Instagram live
  // and instagram_data.meta.code holds the status code of the request
  // 404 means nothing was found, and 200 means everything is all good so...

  if(instagram_data.meta.code == 200) {
    // create a variable that holds all returned payload
    var photos = instagram_data.data;

    //as long as that variable holds data (does not = ) then...

    if(photos.length > 0) {
      //since there are multiple objects in the payload we have
      //to create a loop
      for (var key in photos ){
        //we create a variable for one object
        var photo = photos[key];
        //then we create and append to the DOM an  element in jQuery
        //the source of which is the thumbnail of the photo
        $('#target').append(photo.tag);
      }
    }
    else {
      //if the photos variable doesn’t hold data
      $('#target').append("Hmm.  I couldn't find anything!");
    }
    else  {
      //if we didn’t get a 200 (success) request code from instagram
      //then we display instagram’s error message instagram
      var error = data.meta.error_message;
      $('#target').append('Something happened, Instagram said: ' + error);
    }
  }
}
});