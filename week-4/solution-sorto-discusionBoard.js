
  	/*============================================

  	; Title: Discussion Board 4.1 - Arrays
  	; Author: Arlix Sorto
  	; Date: 6/16/2020
  	; Modified By: Karina Alvarez
  	; Description: A program with a few of errors.

  	;===========================================
  	*/


  	//FIXME: Should output a list of colors.

     // changed {} for []
  	var myColors = ["Black","Blue", "Brown", "Gray", "Green","Orange", "Purple", "Red","White", "Yellow"];

  	//Validate an array and then loop through an array.
  	function displayColors(colors){

  	if(Array.isArray(colors)){
  	for(var i = 0; i< colors.length; i++){  // erased () after colors.length
  	console.log(colors[i]); // changed {} for []
  	}
  	}
  	}

  	//Calls displayColors function
  	displayColors(myColors);

