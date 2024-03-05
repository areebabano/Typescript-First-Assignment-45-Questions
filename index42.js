"use strict";
const MagicianNames = [
    "David Blaine",
    "Dynamo",
    "Ricky Jay",
    "David Copperfield",
    "Harry Potter"
];
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the great" + magicians[i];
    }
}
function showMagician(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
makeGreat(MagicianNames);
console.log("great magicians:");
showMagician(MagicianNames);
