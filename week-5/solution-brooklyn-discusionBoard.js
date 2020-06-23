 /*
      ============================================
      ; Title: hairston-discussion.js
      ; Author: Brooklyn Hairston
      ; Date: 23 June 2020
      ; Modified by: Brooklyn Hairston
      ; Description: Program using key collection array
      ; with two errors
      ;===========================================
      */

      //header
      const header = require('./hairston-header.js')

    console.log(header.display('Brooklyn','Hairston', 'Discussion'))

    //program with two errors


 let stopLight = new Map() // separated new from Map()

// added semicolon at the end
 stopLight.set("green", "go");
 stopLight.set("red", "stop");
 stopLight.set("yellow", "caution");

// added brackets [ ] to key and value
 for (let [key, value] of stopLight) {
  console.log("a " + key + " light" + " means " + value);
 }
