/*global $*/

var all_movies= 'https://api.airtable.com/v0/appZpIX04cj7nqS5Z/Movies?api_key=' + api_key;

// All details
function renderRecords(data) {
    
    $(data.records).each(function(index, movies) {
      var movies_name = movies.fields['Name'];
      var movies_poster = movies.fields['Poster'];
      var movies_description = movies.fields['Description'];
      var movies_info = '';
      
      
      if (movies_name) {
        movies_info +=`<div class="media">`;
          movies_info +=`<div class="media-left">`;
          if (movies_poster) {
            $.each(movies_poster, function(i, poster){
              movies_info +=`<a href="detail.html?movieID=${movies.id}"><img src="${poster.url}"></a>`;
              movies_info +=`</div>`;
              movies_info += `<div class="media-body">${movies_name}</div>`;
              movies_info +=`</div>`;
            });
          }
      }
      
      
      $('.movies').append(movies_info);
    });
  }

$.get(all_movies, renderRecords);