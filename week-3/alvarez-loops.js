const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.3 - Control Statements"));
console.log ('\n');
/*
============================================
; Title:  Loops
; Author: Professor Krasso
; Date:   11 June 2020
; Modify by: Karina Alvarez
; Description: Displays numbers 0-9
;===========================================
*/

// start of program

var number = 4

/**
 * Params: param1, param2
 * Response: displays true or false
 * Description: compare two parameters
 * with an if...else statement
 */
function match (param1, param2) {
  if (param1 === param2)
    return true
  else
    return false
}

/**
 * Params: param1, param2
 * Response: param1 and param2 do not match
 * Description: compare two parameters
 * with an output of not matching
 */
function logMismatch (param1, param2) {
    console.log(param1 + ' does not match ' + param2 + '!');
}

/**
 * Params: param1, param2
 * Response: param1 and param2 do match
 * Description: compare two parameters
 * with an output of matching
 */
function logMatch (param1, param2) {
  console.log(param1 + ' does match ' + param2 + '!');
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// for loop to compare a random number with number 4
for (let x = 0; x < 10; x++) {
  var randomNum = (randomNumber());

  if (match(number, randomNum)) {
    logMatch(number, randomNum);
} else {
  logMismatch(number, randomNum);
  }
}
