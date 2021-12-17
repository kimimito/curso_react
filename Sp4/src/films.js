// Exercise 1: Get the array of all directors.
function getAllDirectors(moviesData) {
  
  let allDirectors = [];

  allDirectors = moviesData.map(movie => movie.director); 

  allDirectors = allDirectors.filter((item, index) => {
    return allDirectors.indexOf(item) === index;
  })

  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(moviesData, director) {

  let moviesFromDirector = [];

  moviesFromDirector = moviesData.filter( (movie) => movie.director === director );

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
  
  return average;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(moviesData) {

  let alphaOrder = [];

  let titles = moviesData.map( (item) => item.title);

  alphaOrder = titles.sort().slice(0,20);

  return alphaOrder;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(moviesData) {

  let yearOrder = moviesData.map( element => {
    return {...element};
  });

  let result = yearOrder.sort((x, y) => {
    if (x.year < y.year) {
        return -1;
    } else if (x.year > y.year) {
        return 1;
    } else if (x.title < y.title){
        return -1;
    } else {
        return 1;
    }
  });

  return result;

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
