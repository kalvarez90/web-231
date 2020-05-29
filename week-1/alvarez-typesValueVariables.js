/*=======================================
; Title: Assignment 1.5
; Author: Professor Krasso 
; Date: 29 May 2020
; Modified By: Karina Alvarez
; Description: Variable assignment
=======================================*/
//Following professor Krasso instructions

// Employee one
var firstName1 = "Karina";
var lastName1 = "Alvarez";
var address1 = "100 Main Street, Chicago, 90876";
var payRate1 = 25.50;
var n1 = payRate1.toFixed(1);
var hireDate1 = new Date(2011,0, 5);
var x1 = hireDate1.toLocaleDateString();

// Employee two
var firstName2 = "Andrea";
var lastName2 = "Steward";
var address2 = "150 Bloomfield Rd, Chicago, 90876";
var payRate2 = 26.55;
var n2 = payRate2.toFixed(1);
var hireDate2 = new Date(2011, 5, 12);
var x2 = hireDate2.toLocaleDateString();

// Employee three
var firstName3 = "Sophia";
var lastName3 = "Charles";
var address3 = "1817 Main Street, Chicago, 90876";
var payRate3 = 27.25;
var n3 = payRate3.toFixed(1);
var hireDate3 = new Date(2012, 2, 10);
var x3 = hireDate3.toLocaleDateString();

// Employee one 
console.log (firstName1);
console.log (lastName1);
console.log (address1);
console.log (n1);
console.log (x1);

// Employee two
console.log (firstName2);
console.log (lastName2);
console.log (address2);
console.log (n2);
console.log (x2);

// Employee three
console.log (firstName3);
console.log (lastName3);
console.log (address3);
console.log (n3);
console.log (x3);
