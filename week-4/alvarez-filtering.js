const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 4.3 - Filtering"));
console.log ('\n');
/*
============================================
; Title:  filtering
; Author: Professor Krasso
; Date:   17 June 2020
; Modified By: Karina Alvarez
; Description: Demonstrates how to filter values in an array
;===========================================
*/

// Start program

// array of string values
var vehicles = ['Truck', 'Train', 'Car', 'Bus', 'Motorcycle']

/**
 * Params: array, filterValue
 * Response: array element
 * Description: Returns a filtered value from an array
 */
function getValue(arr, stringValue) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === stringValue) {
      console.log(arr[x]);
    }
  }
}

//output of 5 arrays
console.log ('-- DISPLAYING ARRAY ITEMS --');
for (let a = 0; a <vehicles.length; a++) {
  console.log(vehicles[a]);
}

// empty new line
console.log(' ');

//output of selected array
console.log ('-- SELECTED VALUE --');
getValue(vehicles, 'Motorcycle');

// empty new line
console.log(' ');

//output of selected array
console.log ('-- SELECTED VALUE --');
getValue(vehicles, 'Bus');
//end program

//end program
