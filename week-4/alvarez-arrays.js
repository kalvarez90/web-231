const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 4.2 - Arrays"));
console.log ('\n');
/*
============================================
; Title:  Arrays
; Author: Professor Krasso
; Date:   17 June 2020
; Modified By: Karina Alvarez
; Description: Demonstrates how to define and output array values
;===========================================
*/

// start of code

// array of fruit values
var fruits = ["Mango", "Apple", "Watermelon", "Banana", "Orange"];

/**
 * Params: array
 * Response: array element
 * Description: Returns array
 */
function getFruit(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);
  }
}

// call the getFruit() function and output the contents of the array
getFruit(fruits);
