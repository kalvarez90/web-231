const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Discussion Board 7.2 - Constructor Functions"));
console.log ('\n');
/*
============================================
; Title:  constructor-functions.js
; Author: Professor Krasso
; Date:   6 July 2020
; Modify by: Karina Alvarez
; Description: Demonstrates how to work
; with constructor functions
;===========================================
*/



/**
 * Params: id, firstName, lastName, title
 * Response: -
 * Description: sets the id, first name, last name
 * and title of an employee.
 */
function employee (id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// create 5 employee objects
 employee = [
  new employee('101', 'Thomas', 'Edison', 'Software Engineer'),
  new employee('102', 'Benjamin', 'Franklin', 'Programmer'),
  new employee('103', 'Nikola', 'Tesla', 'Project Manager'),
  new employee ('104', 'Charles', 'Babbage', 'Product Manager'),
  new employee ('105', 'Alexander', 'Bell', 'Business Analyst')
];

// Output

for (let x = 0; x < employee.length; x++) {
  console.log(employee[x].id + ' ' + employee[x].firstName + ' ' + employee[x].lastName + ' ' + employee[x].title + '.')
}
