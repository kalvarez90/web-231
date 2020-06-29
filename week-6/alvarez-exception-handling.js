const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Discussion Board 6.1 - Objects and Build-in Objects"));
console.log ('\n');
/*
============================================
; Title:  exception-handling.js
; Author: Professor Krasso
; Date:   30 June 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to create
; a try/catch/finally block
;===========================================
*/

// Start of program

try {
 person.firstName('Karina');
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
