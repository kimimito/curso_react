//codigo para visualizacion en web
import movies from './dataTest.js';

document.addEventListener("DOMContentLoaded", function() {
  getAllDirectors(movies.movies);
  moviesAverageByCategory(movies.movies);
  printCard(movies.movies);
});

//printamos los selects Director y Genero
function printSelectDirectors(options){
  let printSelect = "";
  options.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selectDirector").innerHTML = '<option>Select Director</option>'+`${printSelect}`;
}

document.getElementById("selectDirector").onchange = function() {getDirector()};
function getDirector() {
  let director = document.getElementById("selectDirector").value;
  getMoviesFromDirector(movies.movies, director);
  moviesAverageOfDirector(movies.movies, director);
  if( director === 'Select Director'){
    getAllDirectors(movies.movies);
    moviesAverageByCategory(movies.movies);
    printCard(movies.movies);
  }
}

function printSelectGenere(options){
  let printSelect = "";
  options.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selectGenre").innerHTML = '<option>Select Genre</option>'+`${printSelect}`;
}



// ordenamos alfabeticamente y por año
document.getElementById("orderAlphabetically").onclick = function() {orderAlpha()};
function orderAlpha() {
  orderAlphabetically(movies.movies);
  getAllDirectors(movies.movies);
  document.getElementById("average_director").innerHTML = '';
}

document.getElementById("orderYear").onclick = function() {orderYear()};
function orderYear() {
  orderByYear(movies.movies);
  getAllDirectors(movies.movies);
  document.getElementById("average_director").innerHTML = '';
}

// printamos la card de peliculas
function printCard(dataCard){
  let printSelect = "";
  dataCard.forEach((item) => {
    printSelect += '<div class="card">'+
                    '<p><span>Director: </span>' + '<span>' + `${item.director}` + '</span></p>'+
                    '<p><span>Title: </span>' + '<span>' + `${item.title}` + '</span></p>'+
                    '<p><span>Year: </span>' + '<span>' + `${item.year}` + '</span></p>'+
                    '<p><span>Duration: </span>' + '<span>' + `${item.duration}` + '</span></p>'+
                    '<p><span>Score: </span>' + '<span>' + `${item.score}` + '</span></p>'+
                    '<p><span>Genre: </span>' + '<span>' + `${item.genre}` + '</span></p>'+
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

  printSelectDirectors(allDirectors);

  //console.log("EXERCICE 1 ->", allDirectors);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(moviesData, director) {

  let moviesFromDirector = [];

  moviesFromDirector = moviesData.filter( (movie) => movie.director === director );

  printCard(moviesFromDirector);

  //console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(moviesData, director) {

  let average = 0;

  let moviesCounter = moviesData.reduce((acumulador, valorActual) => {
    if(valorActual.director === director) {
      acumulador++;
      average += valorActual.score;  
    }
    return acumulador;
  }, 0);
  
  average =  Math.round((average / moviesCounter) * 100) / 100;

  if(average) {
    document.getElementById("average_director").innerHTML = 'Films of Director Average: '+`${average}`;
  } else {
    document.getElementById("average_director").innerHTML = '';
  }
  
  //console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(moviesData) {

  let alphaOrder = [];

  function SortArray(x, y){
    return x.title.localeCompare(y.title);
  }

  alphaOrder = moviesData.sort(SortArray);

  printCard(alphaOrder);

  //console.log("EXERCICE 4 ->", alphaOrder);
  return alphaOrder;
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesData) {

  let yearOrder = [];

  function SortArray(x, y){
    if (x.year < y.year) {
      return -1;
    } else if (x.year > y.year) {
        return 1;
    } else if (x.title < y.title){
        return -1;
    } else {
        return 1;
    }
  }

  yearOrder = moviesData.sort(SortArray);

  printCard(yearOrder);

  //console.log("EXERCICE 5 ->", yearOrder);
  return yearOrder;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(moviesData) {

  let allGenre = [];
  let genre = [];
  
  allGenre = moviesData.map(movie => movie.genre);
  console.log('allGenre',allGenre)
  allGenre = allGenre.filter((item, index) => {
    console.log(item)
    console.log(index)
    console.log(allGenre.indexOf(item))
    return allGenre.indexOf(item) === index;
  })
  

  printSelectGenere(allGenre);


  console.log("EXERCICE 6 ->", allGenre);
  return genre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(moviesData) {

  let timeToMinutes = moviesData.map( element => {
    return {...element};
  });

  let result = timeToMinutes.map((movie)=> {
      movie.duration = movie.duration.replace(/[^0-9\.]+/g, '');
      movie.duration = (Number(movie.duration.charAt(0))*60) + Number(movie.duration.slice(-2)) + ' min';
    return movie;
  });

  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}


