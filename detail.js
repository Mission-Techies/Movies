/*global $*/

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}

var url_one_movies = function() {
  var url_id = $.urlParam('movieID');
  return 'https://api.airtable.com/v0/appZpIX04cj7nqS5Z/Movies/' + url_id +'?api_key=' + api_key;
}

// This runs on the detail view
function renderOneMovies(movies) {
      console.log(movies.fields)
      var movies_name = movies.fields['Name'];
      var movies_poster = movies.fields['Poster'];
      var movies_description = movies.fields['Description'];
      var movies_trailer = movies.fields ['Trailer']
      var movies_info = '';
      if (movies_name) {
        movies_info +=`<div class="panel panel-default">`;
          movies_info +=`<div class="panel-body">`;
          if (movies_poster) {
            $.each(movies_poster, function(i, poster){
              movies_info +=`<a href="detail.html?movieID=${movies.id}"><img src="${poster.url}"></a>`;
            });
          }
          movies_info +=`</div>`;
        movies_info += `<div class="panel-footer">Name: ${movies_name}<br>Description: ${movies_description}</div>`;
        //<iframe width="854" height="480" src="https://www.youtube.com/embed/xyjm5VQ11TQ" frameborder="0" allowfullscreen></iframe>
        movies_info += `<div class="panel-footer"><iframe width="854" height="480" src="https://www.youtube.com/embed/${movies_trailer}" frameborder="0" allowfullscreen></iframe></div>`;
        movies_info +=`</div>`;
      }
      $('.movies-detail').append(movies_info);
}

$.get(url_one_movies(), renderOneMovies);   
