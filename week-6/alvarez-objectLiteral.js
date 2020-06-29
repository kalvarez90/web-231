const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Discussion Board 6.1 - Objects and Build-in Objects"));
console.log ('\n');
/*
============================================
; Title:  Discussion Board
; Author: Professor Krasso
; Date:   29 June 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to create
; an object and output the properties.
;===========================================
*/

//start of program

//object literal
var person = {
  id: '205',
  name: 'Help Desk Support',
  requestor: 'Karina Alvarez'
}

//output
console.log('id: ' + person.id + ', name: ' + person.name + ', requestor: ' + person.requestor);

//end of program
