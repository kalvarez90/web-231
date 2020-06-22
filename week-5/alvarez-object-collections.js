const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 5.3 - Object Collections"));
console.log ('\n');
/*
============================================
; Title:  Object Collections
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create an
; object collection and output the contents.
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

// output
console.log('-- COMPOSERS --')
famousComposers.forEach( (composer) => {
  console.log('First Name: ' + composer.firstName + ', ' + 'Last Name: ' + composer.lastName + ', '
  + 'Genre: ' + composer.genre + ', ' + 'Rating: ' + composer.rating + '.')
})
// End of project
