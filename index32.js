"use strict";
const current_users = ["John", "Ammar", "Allon Musk", "Bill Gates", "Rohan"];
const new_users = ["Harry", "Jack", "Bill Gates", "Ali", "Allon MUsk"];
function checkedUserNames(current_users, new_users) {
    const lowerCaseCurrentUser = current_users.map(users => users.toLowerCase());
    for (const newuser of new_users) {
        const lowerCaseNewUser = newuser.toLowerCase();
        if (lowerCaseCurrentUser.indexOf(lowerCaseNewUser) !== -1) {
            console.log(`"${newuser}" you will need to enter a new username. `);
        }
        else {
            console.log(`username "${newuser}" is available.`);
        }
    }
}
checkedUserNames(current_users, new_users);
