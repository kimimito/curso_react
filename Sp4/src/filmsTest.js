//codigo para visualizacion en web
import movies from './dataTest.js';

let moviesData = hoursToMinutes(movies.movies); // recuperamos en array movis con la duracion pasada a minutos

document.addEventListener("DOMContentLoaded", function() {
  getAllDirectors(moviesData);
  moviesGenreForSelect(moviesData);
  printCard(moviesData);
});

//printamos los selects Director y Genero
function printSelectDirectors(options){
  let printSelect = "";
  options.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selectDirector").innerHTML = '<option>Select Director</option>'+`${printSelect}`;
}

function printSelectGenere(options){
  let printSelect = "";
  options.forEach((item) => {
    printSelect += "<option>" + `${item}` + "</option>";
  });
  document.getElementById("selectGenre").innerHTML = '<option>Select Genre</option>'+`${printSelect}`;
}


// funciones onchange de los selects
document.getElementById("selectDirector").onchange = function() {getDirector()};
function getDirector() {
  let director = document.getElementById("selectDirector").value;
  getMoviesFromDirector(moviesData, director);
  moviesAverageOfDirector(moviesData, director);
  if( director === 'Select Director'){
    getAllDirectors(moviesData);
    moviesAverageByCategory(moviesData);
    printCard(moviesData);
  }
}

document.getElementById("selectGenre").onchange = function() {getGenre()};
function getGenre() {
  let genreVal = document.getElementById("selectGenre").value;
  moviesAverageByCategory(moviesData, genreVal);
  if( genreVal === 'Select Genre'){
    getAllDirectors(moviesData);
    moviesAverageByCategory(moviesData);
    printCard(moviesData);
  }
}


// ordenamos alfabeticamente y por año
document.getElementById("orderAlphabetically").onclick = function() {orderAlpha()};
function orderAlpha() {
  orderAlphabetically(moviesData);
  getAllDirectors(moviesData);
  document.getElementById("average_director").innerHTML = '';
}

document.getElementById("orderYear").onclick = function() {orderYear()};
function orderYear() {
  orderByYear(moviesData);
  getAllDirectors(moviesData);
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
function moviesAverageByCategory(moviesData ,genreVal ) {

  let noviesForCategory = [];
  let avarage = ""

  moviesData.filter((movie) => {
    if(movie.genre.includes(genreVal) && movie.score != false ){
      noviesForCategory.push(movie);
    }
  })

  avarage = noviesForCategory.reduce((acumulador, valorActual) => {
    return acumulador + valorActual.score;
  },0);

  avarage = avarage / noviesForCategory.length;

  moviesAverageOfDirector(noviesForCategory, genreVal);

  printCard(noviesForCategory);
  
}


//
function moviesGenreForSelect(moviesData){

  let allGenre = [];
  let genre = [];
  
  allGenre = moviesData.map(movie => movie.genre);

  allGenre.forEach((item) => {
    item.forEach((i) => {
      if(!genre.includes(i)){
        genre.push(i);
      }
    });
  }); 
  
  printSelectGenere(genre);

  console.log("EXERCICE 6 Plus ->", genre);
  return genre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(moviesData) {

  let timeToMinutes = moviesData.map( element => {
    return {...element};
  });

  let result = timeToMinutes.map((movie)=> {
    const time = movie.duration.split(' ');
    let hour = time[0]?.replace(/[^0-9\.]+/g, '');
    let min = time[1]?.replace(/[^0-9\.]+/g, '');
    movie.duration = (Number(hour) * 60) + Number(min) + ' min';
    return movie;
  });

  //console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}


