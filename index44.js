"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log("_" + item);
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("ham", "cheese", "mayonaise");
make_sandwich("butter", "lettuce", "paneer slices");
make_sandwich("bread", "jam", "peanut butter");
