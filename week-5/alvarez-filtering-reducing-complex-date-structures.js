const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 5.4 - Filtering/reducing complex data structures"));
console.log ('\n');
/*
============================================
; Title:  Filtering/reducing complex data structures
; Author: Professor Krasso
; Date:   22 June 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how
; to filter list of collection objects.
;===========================================
*/

// Start of project

// array of five famous composers
famousComposers = [
  {
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: '10'
  },
  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: '9'
  },
  {
    firstName: 'Johann',
    lastName: 'Bash',
    genre: 'Classical',
    rating: '8'
  },
  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '7'
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '6'

  }
];

// return a new list of objects with the lastName and rating
let ratings = famousComposers.map((composer) => {
  return 'Rating: ' + composer.rating + '\n' + 'Composer: ' + composer.lastName
})

// return a new list of objects with the lastName and genre
let genres = famousComposers.map((composer) => {
  return 'Genre: ' + composer.genre + '\n' + 'Composer: ' + composer.lastName
})

// output 1
console.log('-- COMPOSERS BY RATING--')
ratings.forEach((x) => {
  console.log(x + '\n')
})

//OUTPUT 2
console.log('-- COMPOSERS BY GENRE --')
genres.forEach((x) => {
  console.log(x + '\n')
})

// End of project
