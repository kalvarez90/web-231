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
; and display nested objects
;===========================================
*/
// start of program

// object with nested object
var ticket = {
  id: 203,
  name: 'raffle',
  dateCreated: "June 30, 2020",
  priority: "low",

  // nested object
  person: {
    id: 105,
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Programmer'
  }
}

// output
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated +
' and assigned to employee '+ ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').');

// end of program
