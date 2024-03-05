"use strict";
const magician_names = [
    "David Blaine",
    "Dynamo",
    "Ricky Jay",
    "David Copperfield",
    "Harry Potter"
];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}
const greatMagiciansNames = make_great(magician_names);
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("Great Magicians:");
show_magicians(greatMagiciansNames);
