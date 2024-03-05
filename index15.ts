let GuestList:Array<string> = ["Fatima","Iqra","Javeriya","Ayat"];
let guestCantMakeIt:string = "Javeriya";
// console.log(guestCantMakeIt);
let newGuest:string = "Hira";
// console.log(newGuest);
let indexOfGuestCantMakeIt:number = GuestList.indexOf(guestCantMakeIt);
// console.log(indexOfGuestCantMakeIt);
if(indexOfGuestCantMakeIt !== -1){
     GuestList[indexOfGuestCantMakeIt] = newGuest;
}
// console.log(guestList[2]);

GuestList.forEach((guest:string)=>{
    console.log(`"salam! ${guest} I would like to invite you for dinner tommorow at 9pm."`)
}


)