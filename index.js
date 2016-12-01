/*global $*/

var all_movies= 'https://api.airtable.com/v0/appZpIX04cj7nqS5Z/Movies?api_key=' + api_key;

// All details
function renderRecords(data) {
    
    $(data.records).each(function(index, movie) {
      var movie_name = movie.fields['Name'];
      var movie_pics = movie.fields['Poster'];
      var movie_info = '';
      
      
      if (movie_name) {
        movie_info +=`<div class="media">`;
          movie_info +=`<div class="media-left">`;
          if (movie_pics) {
            $.each(movie_pics, function(i, pic){
              movie_info +=`<a href="detail.html?movieID=${movie.id}"><img src="${pic.url}"></a>`;
              movie_info +=`</div>`;
              movie_info += `<div class="media-body">${movie_name}</div>`;
              movie_info +=`</div>`;
            });
          }
      }
      
      
      $('.movies').append(movie_info);
    });
  }

$.get(all_movies, renderRecords);