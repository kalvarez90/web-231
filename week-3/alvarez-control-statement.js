const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.3 - Control Statements"));
/*
============================================
; Title:  pattern-matching-functions.js
; Author: Professor Krasso
; Date:   11 June 2020
; Modify by: Karina Alvarez
; Description: Displays a string message if the choice variable equals 13
;===========================================
*/

// start of program

let eventKeyCode = '13'

switch (eventKeyCode) {
  case '13':
  console.log('\n' + 'The enter key was pressed.')
  break;

  case '16':
  console.log('The shift key was pressed.')
  break;

  case '32':
  console.log('The spacebar key was pressed.')
  break;

  case '8':
  console.log('The backspace / delete key was pressed.')
  break;

  default:
  console.log('Unrecognized key.')
  break;
}
