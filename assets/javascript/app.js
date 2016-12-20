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
			$('body').append($('<img>').attr('src', data[i].images.original.url).data('still', data[i].images.original_still.url).data('animate', data[i].images.original.url).data('state', 'still').addClass('gif'));
		}
		}).fail(function(err) {
		  throw err;
		});

		return false;
	})

$(".gif").on("click", function() {
	var state = $(this).data("state");
	if (state == "still"){
      	var new_src = $(this).data("animate");
      	$(this).attr("src", new_src);
      	new_src = "animate";

      }
      else {
      	var new_src = $(this).data("still");
      	$(this).attr("src", new_src);
      	new_src = "still"
}
});