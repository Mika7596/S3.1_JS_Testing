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
  let totalScore = moviesList.reduce((a, b) => a.score + b.score);
  let avgScore = (totalScore / moviesList.length).toFixed(2);
  console.log(avgScore);
  return avgScore;
}
moviesAverageOfDirector(movies, "Frank Darabont")


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
function hoursToMinutes(array) {
//   let hours;
//   let minutes;
//   let durations = array.map( movie => {
//     if (!movie.duration.includes("h")){
//       hours = 0;
//     } else{
//       hours = Number(movie.duration.trim().slice(0, movie.duration.trim().indexOf("h")))
//     }
//     if (!movie.duration.includes("m")){
//       minutes = 0;
//     } else{
//       minutes = Number(movie.duration.slice(movie.duration.indexOf("m")-2, movie.duration.indexOf("m")));
//     }
//     let durationInMinutes = hours * 60 + minutes;
//     return {
//       ...movie,
//       duration: durationInMinutes
//     }
//   });
//   console.log("Exercise 7 ->");
//   console.log(durations);
 }
// hoursToMinutes(movies)

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
//   let moviesOfYear = array.filter( movie => movie.year == year);
//   let highestScore = 0;
//   let bestFilm;
//   moviesOfYear.forEach( movie => {
//     if (movie.score > highestScore){
//       bestFilm = movie;
//     }
//   })
//   console.log(bestFilm)
}

// bestFilmOfYear(movies, 1984)



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
console.log('first commit');