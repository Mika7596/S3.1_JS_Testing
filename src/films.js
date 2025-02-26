const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  [];
  array.map(movie => result.push(movie.director));
  console.log ("EXERCICE 1 ->", result);
  return result;
}
getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesOf = array.filter(movie => movie.director == director);
  console.log("EXERCISE 2 -> ", moviesOf);
  return moviesOf
}
getMoviesFromDirector(movies, "Frank Darabont")

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesList = getMoviesFromDirector(array, director);
  let scoreList = moviesList.map(movie => movie.score);
  let totalScore = Number(scoreList.reduce((a, b) => a + b));
  let avgScore = Number((totalScore / moviesList.length).toFixed(2));
  console.log("Exercise 3 ->", avgScore);
  return avgScore;
}
moviesAverageOfDirector(movies, "Frank Darabont")


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let orderedNames = array.map(movie => movie.title).sort().slice(0, 20);
  console.log("Exercise 4 ->", orderedNames);
  return orderedNames;  
}
orderAlphabetically(movies)

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderdYear = array.map(movie => movie)
  orderdYear.sort((a, b) => a.title > b.title ? 1 : -1).sort((a, b) => a.year - b.year);
  console.log("Exercise 5 -> ", orderdYear);
  return orderdYear;
}
orderByYear(movies);

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  let totalGenre = array.filter(movie => movie.genre.includes(genre));
  let totalScoreGenre = totalGenre.map(movie => movie.score).reduce((a, b) => a + b);
  let avgGenre = (totalScoreGenre / totalGenre.length).toFixed(2);
  console.log("Exercise 6 ->", avgGenre);
  return avgGenre;
}
moviesAverageByCategory(movies, "Drama");

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hours;
  let minutes;
  let durations = array.map( movie => {
    if (!movie.duration.includes("h")){
      hours = 0;
    } else{
      hours = Number(movie.duration.trim().slice(0, movie.duration.trim().indexOf("h")))
    }
    if (!movie.duration.includes("m")){
      minutes = 0;
    } else{
      minutes = Number(movie.duration.slice(movie.duration.indexOf("m")-2, movie.duration.indexOf("m")));
    }
    let durationInMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: durationInMinutes
    }
  });
  console.log("Exercise 7 ->", durations);
  return durations
 }
hoursToMinutes(movies)

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesOfYear = array.filter( movie => movie.year == year);
  let highestScore = 0;
  let bestFilm =[];
  moviesOfYear.forEach( movie => {
    if (movie.score > highestScore){
      bestFilm = [];
      bestFilm.push(movie);
      highestScore = movie.score;
    }
    if (movie.score == highestScore){
      bestFilm.push(movie)
    }
  })
  console.log("Exercise 8 ->", bestFilm)
  return bestFilm
}

bestFilmOfYear(movies, 1984)



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
    bestFilmOfYear
  };
}