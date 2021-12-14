//codigo para visualizacion en web
import movies from './dataTest.js';

document.addEventListener("DOMContentLoaded", function() {
  getAllDirectors(movies);
});

function printSelect(directors){
  let printSelect = "";
  directors.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selctDirector").innerHTML = `${printSelect}`;
}

document.getElementById("selctDirector").onchange = function() {renderCard()};
function renderCard() {
  let director = document.getElementById("selctDirector").value;
  document.getElementById("demo").innerHTML = "You selected: " + director;
}



// Exercise 1: Get the array of all directors.
function getAllDirectors(moviesData) {
  
  let allDirectors = [];

  allDirectors = moviesData.movies.map(movie => movie.director);
  //allDirectors = moviesData.map(movie => movie.director); // descomentar para el test y comentar linea superior

  allDirectors = allDirectors.filter((item, index) => {
    return allDirectors.indexOf(item) === index;
  })

  printSelect(allDirectors);// comentar para el test

  console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(moviesData, director) {
 
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



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
