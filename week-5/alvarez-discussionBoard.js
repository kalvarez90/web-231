const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Discussion Board 5.1 - Advanced Arrays"));
console.log ('\n');
/*
============================================
; Title:  Discussion Board
; Author: Professor Krasso
; Date:   23 June 2020
; Modified by: Karina Alvarez
; Description: Create a Javascript program with
; two or more errors.
;===========================================
*/

// Start of project

// one error bellow
// map() object
let emoji = new Map();
emoji.set('🚗', 'car');
emoji.set('🍕', 'pizza');
emoji.set('😄 , grinning face');
emoji.size;

// one error bellow
// for loop output
// Output is :
// 🚗  : car
// 🍕  : pizza
// 😄  : grinning face
for (let {key, value} of emoji) {
  console.log(key + ' : ' + value);
}

//two errors below
// Output
console.log('\n'); // new line
console,log(emoji.get('🍕')); // output is -> pizza
console.log(emoji.has('🚗'); // output is -> true

// end of program
