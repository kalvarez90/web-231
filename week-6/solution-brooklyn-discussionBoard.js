/*
============================================
; Title:  hairston-discussion-6-1.js
; Author: Brooklyn Hairston
; Date:   1 July 2020
; Modified by: Karina Alvarez
; Description: Program using object properties with multiple errors
;===========================================
*/

//program with multiple errors
/** expected output:
* Tonight's dinner is: Potato Skins, Cheeseburgers and Ice Cream.
*/
//program with multiple errors

/** expected output:
* Tonight's dinner is: Potato Skins, Cheeseburgers and Ice Cream.
*/
var friday = {  // changed colon ':' for equal sign '='
  appetizer: "Stuffed Mushrooms", // changed the equal sign '=' for colon ':'
  entree: "Chicken Alfredo", // changed the equal sign '=' for colon ':'
  dessert: "Chocolate Cake"  // changed the equal sign '=' for colon ':'
  };

var saturday = {  // changed equal sign '=' for colon ':'
  appetizer: "Potato Skins", // changed the equal sign '=' for colon ':'
  entree: "Cheeseburgers",  // changed the equal sign '=' for colon ':'
  dessert: "Ice Cream"  // changed the equal sign '=' for colon ':'
};

var sunday = {
  appetizer: "French Onion Soup",
  entree: "Club Sandwich",
  dessert: "Apple Pie"

  };
  function menu() {

  console.log("Tonight's dinner is: " + this.appetizer + ", " + this.entree + " and " + this.dessert + ".");}
  friday.menu = menu;
  saturday.menu = menu;
  sunday.menu = menu; // added a dot '.' between sunday and menu


  console.log("\n");
  saturday.menu();
