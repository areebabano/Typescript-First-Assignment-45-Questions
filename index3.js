"use strict";
let PersonName = "Areeba hammad";
// name in lowercase
let lowerCaseName = PersonName.toLowerCase();
console.log(`lowercase: ${lowerCaseName}`);
// name in uppercase
let upperCaseName = PersonName.toUpperCase();
console.log(`uppercase: ${upperCaseName}`);
// name in titlecase
let words = PersonName.split(" ");
let titleCaseName = "";
for (let a = 0; a < words.length; a++) {
    titleCaseName += words[a].charAt(0).toUpperCase() + words[a].slice(1) + " ";
}
console.log(`titlecase: ${titleCaseName}`);
