"use strict";
let GuestList = ["Fatima", "Iqra", "Javeriya", "Ayat"];
let guestCantMakeIt = "Javeriya";
// console.log(guestCantMakeIt);
let newGuest = "Hira";
// console.log(newGuest);
let indexOfGuestCantMakeIt = GuestList.indexOf(guestCantMakeIt);
// console.log(indexOfGuestCantMakeIt);
if (indexOfGuestCantMakeIt !== -1) {
    GuestList[indexOfGuestCantMakeIt] = newGuest;
}
// console.log(guestList[2]);
GuestList.forEach((guest) => {
    console.log(`"salam! ${guest} I would like to invite you for dinner tommorow at 9pm."`);
});
