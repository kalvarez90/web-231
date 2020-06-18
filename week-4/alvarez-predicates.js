const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 4.4 -Predicates"));
console.log ('\n');
/*
============================================
; Title:  predicates
; Author: Professor Krasso
; Date:   18 June 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to declare
; and use JavaScript predicates
;===========================================
*/

// array of 5 states
states = [ 'Florida', 'Texas', 'Alabama', 'Kentucky', 'California'];

/**
 * Params: element, value
 * Response: true/false
 * Description: Returns true/false given the comparison
 */
function getState(para1, para2) {
  if (para1 === para2) {
    return true;
  }
}

/**
 * Params: array
 * Response: array element
 * Description: Returns an array
 */
function outputStates(arr) {
  for (let x = 0; x < arr.length; x++) {
      console.log(arr[x]);
    }
}

// using filter() to select an specific state
selectedState = states.filter(function (para1) {
  return getState(para1, 'Kentucky')});

// first output of five states
console.log('-- ORIGINAL ARRAY --');
outputStates(states)

//  new line
console.log('\n');

//second output. states sorted alphabetically
console.log('-- SORTED ARRAY --');
states.sort().forEach(state => console.log(state));

//  new line
console.log('\n');

//third output. a selected state.
console.log('-- SELECTED ARRAY --');
outputStates(selectedState);

// end project
