var sport;

var topics = ["basketball", "baseball", "football", "soccer", "swimming", "tennis", "hockey"];

for(i = 0; i <topics.length; i++) {
     $('body').prepend($('<button>').text(topics[i]).val(topics[i]));
 }

$("button").on("click", function(){

	sport = $(this).val();

var queryUrl = "http://api.giphy.com/v1/gifs/search";
		queryUrl += '?' + $.param({
		  'api_key': "dc6zaTOxFJmzC",	
		  'q': sport,
		  'limit': 10,
		  'rating': "pg",
			});

		$.ajax({
		  url: queryUrl,
		  method: 'GET',
		}).done(function(response) {
			console.log(response);
			var data = response.data;


			for (var i=0; i<data.length; i++){
			$('body').append($('<img>').attr('src', data[i].images.original.url));
}
		}).fail(function(err) {
		  throw err;
		});

		return false;
	})