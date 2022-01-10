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
function moviesAverageByCategory(moviesData, genreVal) {

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

  return avarage;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(moviesData) {

  let timeToMinutes = moviesData.map( element => {
    return {...element};
  });

  let result = timeToMinutes.map((movie)=> {
    const time = movie.duration.split(' ');
    let hour = time[0] || 0;
    let min = time[1] || 0;

    if(hour){
      hour = hour.replace(/[^0-9\.]+/g, '');
      hour = Number(hour) * 60;
    }

    if(min){
      min = min.replace(/[^0-9\.]+/g, '');
      min = Number(min);
    }

    movie.duration = hour + min;
    return movie;
  });

  return result;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let films = array.map( element => {
    return {...element};
  });

  let sameYearFilms = films.filter(element => element.year === year);

  let filmsSorted = sameYearFilms.sort((firstEl, secondEl) => {
      if (firstEl.score < secondEl.score) {
          return 1;
      } else if (firstEl.score > secondEl.score) {
          return -1;
      } else {
          return 0;
      }
  });

  let result = [];
  result.push(filmsSorted[0]);
  
  return result;

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
