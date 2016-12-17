/*global $*/

// This runs on the detail view

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
	  return results[1] || 0;
	}
	return false;
}


/*global api_key*/
var url_one_movie = function() {
  var url_id = $.urlParam('movieID');
  return 'https://api.airtable.com/v0/appZpIX04cj7nqS5Z/Movies?maxRecords=3&view=Main%20View' + url_id +'?API_key=' + API_key;
}


function renderOnemovie(movie) {
      var movie_name = movie.fields['Name'];
      var movie_pics = movie.fields['Poster'];
      var movie_releasedate = movie.fields['release date']
      var movie_info = '';
      if (movie_name) {
        movie_info +=`<div class="panel panel-default">`;
          movie_info +=`<div class="panel-body">`;
          if (movie_pics) {
            $.each(movie_pics, function(i, pic){
              movie_info +=`<a href="onemovie.html?movieID=${movie.id}"><img src="${pic.url}"></a>`;
            });
          }
          movie_info +=`</div>`;
        movie_info += `<div class="panel-footer"> <h3><strong> ${movie_name} </strong></h3> <br> `;
      }
      $('.movie_detail').append(movie_info);
}

if ($.urlParam('movieID')) {
  $.get(url_one_movie(), renderOnemovie);   
}


