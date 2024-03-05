"use strict";
let userNames = ["Anders Hejlsberg", "Admin", "Eric", "John", "Harry"];
function users(userNames) {
    if (userNames.length === 0) {
        console.log("we need to find some users!");
        return;
    }
    for (let userName of userNames) {
        if (userName.toLowerCase() === "admin") {
            console.log("Hello Admin would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName} thank you for logging in again.`);
        }
    }
}
console.log("\n\n array is not an empty:");
users(userNames);
userNames = [];
console.log("\n\n array is an empty:");
users(userNames);
