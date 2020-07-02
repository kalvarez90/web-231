/* ============================================
  	; Title: Assignment 6.1
  	; Author: Douglas Jenkins
  	; Date: 2 July 2020
  	; Modified By: Karina Alvarez
  	; Description: Errors below
  	;=========================================== */

  	//Header
  	var header = require('../jenkins-header');
  	console.log(header.display("Douglas", "Jenkins", "Exercise 5.4"));
  	console.log ('\n');

  	//Three errors below
  	try {
  	// variables
  	let x = 5
  	let y = 3
  	const sum = x - y

  	// if statement ===
  	if (sum === 2 ) throw 'Equal Value' // removed s from throw

  	// output
  	console.log(sum)
  	} catch (err) { // removed s from err
  	console.log('Catch clause: ' + err)
  	} finally {
  	console.log('Finally clause reached...')
    } // changed square brackets [ ] for curly brackets { }

    // Output is:
    //Catch clause: Equal Value
    // Finally clause reached...
