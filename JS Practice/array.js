/*
Topics Covered
==============
Variables
DataTypes


Today - Array Methods:
==============
length(), push(), pop(), shift(), unshift(), slice(), splice(), concat()
*/

// Array Methods

let names = ["Hitesh", "Anurag", "Anirudh", "Sanju", "Harsh"];
console.log(names);
console.log(names.length);

// Splice Methods
let names_slice = ["Hitesh", "Anurag", "Anirudh", "Sanju", "Harsh"];
console.log(names_slice.splice(1, 0, "Sam"));
console.log(names_slice);

// Fill('String', intial index, ends_index) => Home Work
let names_slice1 = ["Hitesh", "Anurag", "Anirudh", "Sanju", "Harsh"];
console.log(names_slice1.fill("Sanju", 2, 3));
console.log(names_slice1);