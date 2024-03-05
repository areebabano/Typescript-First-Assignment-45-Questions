"use strict";
function makeShirts(size = "large", message = "I LOVE Typescript.") {
    return console.log(`size: ${size} , message: ${message}`);
}
// large shirt
makeShirts();
// medium shirt
makeShirts("medium");
// small shirt
makeShirts("small", "Keep Calm & Typescript ON!");
// excel shirt
makeShirts("excel", "I like Coding.");
