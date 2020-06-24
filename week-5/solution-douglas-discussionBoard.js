
/* ============================================
; Title: Assignment 5.1
; Author: Douglas Jenkins
; Date: 23 June 2020
; Modified By: Karina Alvarez
; Description: fix the mistakes
;=========================================== */

// Three mistakes below
// Creates a new map and set what is being passed
let fruitColor = new Map ();
fruitColor.set ( 'Apple' , 'Red' );
fruitColor.set ( 'Pear' , 'Green' ); // changed , for .

// Displays the value of the new Map
for ( let [key , value] of fruitColor) {  // remove s after let. "lets" will not give an output
console.log ('The ' + key + ' is ' + value );
} // console.logs do not exist so I have remove s after log

