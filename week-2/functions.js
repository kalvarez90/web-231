const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 2.4 - Functions"));

/*
============================================
; Title:  Functions
; Author: Professor Krasso
; Date:   5 June 2020
; Modified by: Karina Alvarez
; Description: Displays the sum of two values
;===========================================
*/


/**
 * Params: First name, Last name
 * Response: Karina Alvarez
 * Description: returns my full name
 */
function fullName (firstName, lastName) {
  return firstName + ' ' + lastName;
}

/**
 * Params: Year, Month, Day
 * Response: year/month/day
 * Description: returns today's date
 */
function dateWriter(year, month, day) {
  return year + '/' + month + '/' + day;
}

/**
 * Params: number, numOfFixedPosition
 * Response: numOfFixedPosition
 * Description: temperature is returned (33.6 degrees)
 */
function formatNumber(number, numOfFixedPosition) {
  var number = 33.62349;
  var numOfFixedPosition = number.toFixed(1);
return numOfFixedPosition;
}

/**
 * Params: age
 * Response: returns current age
 * Description: takes a string into an Int
 */
function convertToInt (age) {
  var age = parseInt("30");
  return age;
}

/**
 * Params: savingGoal
 * Response: 15000
 * Description: takes a string into a float
 */
function convertToFloat (savingGoal) {
  var savingGoal = parseFloat("15000");
  return savingGoal;
}

//Output
console.log ('\n')
console.log('Hello, my name is ' + fullName("Karina", "Alvarez") + '!');
console.log('Today\'s date is ' + dateWriter("2020", "6", "5") + ' and the current temperature is ' + formatNumber () + ' degrees.');
console.log ('I am ' + convertToInt() + ' years old and my savings account goal is ' +  convertToFloat() + ' dollars.');
