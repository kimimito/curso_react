//codigo para visualizacion en web
import movies from './dataTest.js';

document.addEventListener("DOMContentLoaded", function() {
  getAllDirectors(movies.movies);
  printCard(movies.movies);
});

function printSelect(directors){
  let printSelect = "";
  directors.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selctDirector").innerHTML = '<option>Select Director</option>'+`${printSelect}`;
}

document.getElementById("selctDirector").onchange = function() {getDirector()};
function getDirector() {
  let director = document.getElementById("selctDirector").value;
  getMoviesFromDirector(movies.movies, director);
}

function printCard(dataCard){
  let printSelect = "";
  dataCard.forEach((item) => {
    printSelect += '<div class="card">'+
                    '<p><span>Director: </span>' + `${item.director}` + '</p>'+
                    '<p><span>Title: </span>' + `${item.title}` + '</p>'+
                    '<p><span>Year: </span>' + `${item.year}` + '</p>'+
                    '<p><span>Duration: </span>' + `${item.duration}` + '</p>'+
                    '<p><span>Score: </span>' + `${item.score}` + '</p>'+
                    '<p><span>Genre: </span>' + `${item.genre}` + '</p>'+
                    '</div>';
  });
  document.getElementById("card_content").innerHTML = `${printSelect}`;
}



// Exercise 1: Get the array of all directors.
function getAllDirectors(moviesData) {
  
  let allDirectors = [];

  allDirectors = moviesData.map(movie => movie.director);

  allDirectors = allDirectors.filter((item, index) => {
    return allDirectors.indexOf(item) === index;
  })

  printSelect(allDirectors);

  console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(moviesData, director) {

  let moviesFromDirector = [];

  moviesFromDirector = moviesData.filter( (movie) => movie.director === director );

  printCard(moviesFromDirector);

  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}


