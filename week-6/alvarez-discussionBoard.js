const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Discussion Board 6.1 - Objects and Build-in Objects"));
console.log ('\n');
/*
============================================
; Title:  Discussion Board
; Author: Professor Krasso
; Date:   29 June 2020
; Modified by: Karina Alvarez
; Description: Create a Javascript program with
; two or more errors.
;===========================================
*/

// Start of program

// Creating an object - person
// Two error below
var person = [
  firstName: "Karina",
  lastName: "Alvarez"
  age: 30,
  passions: "baking and homeschooling"
];

//Output
//One error bellow
console.log( 'I\'m ' + person.firstName + ' ' + person.LastName +' and I\'m ' + person.age + ' years old.');
console.log('Two things I love doing are ' + person.passions + '.');

// End of program
