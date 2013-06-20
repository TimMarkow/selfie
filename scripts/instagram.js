$(document).ready(function() {

	var tag = "selfie";
	var count = 5;
	var access_token = '22033045.ea9028a.eec94286a2e049429fe51c3fbc95db20';
	var access_parameters = {access_token: access_token};
	
	function grabImages(access_parameters) {
		var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + 
		'/media/recent?callback=?&count=' + count;
		
		$.getJSON(instagramUrl, access_parameters, onDataLoaded);
	}

	function onDataLoaded(instagram_data) {
		if (instagram_data.meta.code == 200) {
			var photos = instagram_data.data;

			if (photos.length > 0) {
				for (var key in photos) {
					var photo = photos[key];
					var display = "<li><img src='" + photo.images.standard_resolution.url +
					"'/></li>";
					$('#target>ul').append(display);
					
				//	console.log(photo);
				//	console.log(display);
				}
			}
			else {
				$('#target').append("Hmm. Couldn't find anything!");
			}
		}
		else {
			var error = data.meta.error_message;
			$('#target').append("Something happend, Instagram said: " +
			error);
		}
	}		

	grabImages(access_parameters);

	$('ul').hover(function() {
		console.log("mreh!");
	});

});


