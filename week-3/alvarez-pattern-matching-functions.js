const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.2 - Pattern Matching Functions"));
/*
============================================
; Title:  pattern-matching-functions.js
; Author: Professor Krasso
; Date:   10 June 2020
; Modify by: Karina Alvarez
; Description: Displays true or false
;===========================================
*/

// start of program

// six (6) test variables
var testVar1 ='Truck';
var testVar2 = 'Car';
var testVar3 = 'Bike';
var testVar4 = 'Bike';
var testVar5 = 'Four';
var testVar6 = 'Three';

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
    console.log(param1 + ' and ' + param2 + ' do not match!');
}

/**
 * Params: param1, param2
 * Response: param1 and param2 do match
 * Description: compare two parameters
 * with an output of matching
 */
function logMatch (param1, param2) {
  console.log(param1 + ' and ' + param2 + ' do match!');
}

// true or false output
console.log ('\n' + match('apple', 'pear'));
console.log(match('apple', 'apple'));

// if...else block comparing Truck to Car
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

// if...else block comparing Bike to Bike
if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

// if...else block comparing Four to Three
if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}

// end of program
