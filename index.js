//BOOK SEARCH
function bookSearch(){
  console.log('Book Search')
  var search = document.getElementById('search').value
  
  $.ajax({
    url: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC46xmJzGLyksV0gw_bp4y1jncJWXw8mCw`,
    dataType: "json",
    type: 'GET',
    maxResults: '25',
    success: function(data) {
      console.log('DATA', data.items)
      const results = data.items.map(item => {
        console.log(item.volumeInfo.title)
        return `
            <li>
              <h3>${item.volumeInfo.title}</h3>
              <img class="book-cover" src="${item.volumeInfo.imageLinks.thumbnail}">
              <h4>Author: ${item.volumeInfo.authors}</h4>
              <h4>Published: ${item.volumeInfo.publishedDate}</h4>
              <h5>${item.volumeInfo.description}</h5>
              </li>
              <br>
        `
      })
      console.log(results)
      $('#book-results').html(results)
    }
  });
} 

//MOVIE SEARCH
function movieSearch() {
  console.log('Movie Search')
  var search = document.getElementById('search').value

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9247a39de8e225315a9d23b6eae39d79`,
  "method": "GET",
  "data": "{}"
}

$.ajax(settings).done(function(response) {
  console.log('RESPONSE', response.results);
  const results = response.results.map(result => {
        console.log(result.name)
        var title; 

        if (result.name) {
          title = result.name
        } else {
          title = result.title
        }
        return `
            <li class="movie">
              <h3>${title}</h3>
              <img class="movie-poster" src="https://image.tmdb.org/t/p/w200/${result.poster_path}">
              <h4>Release Date: ${result.release_date}</h4>
              <h4>Vote Average: ${result.vote_average}</h4>
              <h4>${result.overview}</h5>
            </li>
            <br>
        `
      })
      console.log(results)
      $('#movie-results').html(results)
    }
)};

//TV SEARCH
function tvSearch() {
  console.log('TV Search')
  var search = document.getElementById('search').value

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://api.themoviedb.org/3/search/tv?query=${search}&api_key=9247a39de8e225315a9d23b6eae39d79`,
  "method": "GET",
  "data": "{}"
}

$.ajax(settings).done(function(response) {
  console.log('RESPONSE', response.results);
  const results = response.results.map(result => {
        console.log(result.name)
        var title; 

        if (result.name) {
          title = result.name
        } else {
          title = result.title
        }
        return `
            <li class="tv">
              <h3>${title}</h3>
              <img class="tv-poster" src="https://image.tmdb.org/t/p/w200/${result.poster_path}">
              <h4>First Air Date: ${result.first_air_date}</h4>
              <h4>Vote Average: ${result.vote_average}</h4>
              <h4>${result.overview}</h5>
            </li>
            <br>
        `
      })
      console.log(results)
      $('#tv-results').html(results)
    }
)};

// Dropdown Menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Scroll to top when arrow is clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow clicked END*/


document.getElementById('inputform').addEventListener('submit', function(e){
  e.preventDefault();
  bookSearch();
  movieSearch();
  tvSearch();

setTimeout(function(){
  window.scrollTo({
    top: 625,
    behavior: 'smooth'
  });
}, 500)
  
});