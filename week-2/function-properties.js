const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 2.3 - Functions"));

/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   2 June 2020
; Modified by: Karina Alvarez
; Description: Displays a formatted header
;===========================================
*/

// function property
myName.karina = "Karina Alvarez";
Date.today = "June 2, 2020"

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.karina;
}

// output name
console.log('\n');
console.log("Hello " + myName() + "!");
