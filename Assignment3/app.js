var genre = document.getElementsByClassName("genre");
var year = document.getElementsByClassName("year");
var language = document.getElementsByClassName("language");
var rating = document.getElementsByClassName("rating");
var filterBtn = document.getElementsByClassName("filterBtn");
var filteredMoviesDiv = document.getElementsByClassName("filteredMovies");

// Fetch the movies data from the movies.json file
fetch("./movies.json")
  .then(response => response.json())
  .then(data => {
    var movies = data.movies;
    
    // Add event listener to the filter button
    filterBtn.addEventListener("click", function() {
      // Get the user's selections
      var selectedGenre = genre.value;
      var selectedYear = year.value;
      var selectedLanguage = language.value;
      var selectedRating = rating.value;

      // Filter the movies based on the user's selections
      var filteredMovies = movies.filter(function(movie) {
        if (selectedGenre != "" && movie.genre != selectedGenre) {
          return false;
        }
        if (selectedYear != "" && movie.year != selectedYear) {
          return false;
        }
        if (selectedLanguage != "" && movie.language != selectedLanguage) {
          return false;
        }
        if (selectedRating != "" && movie.rating < selectedRating) {
          return false;
        }
        return true;
      });

      // Display the filtered movies
      filteredMoviesDiv.innerHTML = "";
      filteredMovies.forEach(function(movie) {
        var movieDiv = document.createElement("div");
        movieDiv.innerHTML = movie.title + " - " + movie.genre + " - " + movie.year + " - " + movie.language + " - " + movie.rating;
        filteredMoviesDiv.appendChild(movieDiv);
      });
    });
  })
  .catch(error => console.error(error));
