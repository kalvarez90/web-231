const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 5.2 - Build in Functions"));
console.log ('\n');
/*
============================================
; Title:  Build in Functions
; Author: Professor Krasso
; Date:   22 June 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to loop through
; an array using the forEach and arrow functions
;===========================================
*/

// Start of program

// array of my favorite foods
var favoriteFoods = ['Chilean Empanadas', 'Steak', 'Mashed Potato', 'zucchini boats', 'Tacos'];

// output
favoriteFoods.forEach((faveFoods) => {
  console.log(faveFoods)
})

// End of program
