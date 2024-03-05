let guestList:Array<string> = ["Fatima","Iqra","Javeriya","Ayat"];
for(let guest of guestList){
    console.log(`"hey! ${guest} Now we found a new bigger dinner table."`)
}
// guest add in beginning
let guestInBeginning:string = "Minal";
guestList.unshift(guestInBeginning);
console.log(guestList);
// guest add in middle
let guestInMiddle:string = "Zara";
let middleIndex:number = Math.floor(guestList.length/2);
// console.log(middleIndex);
guestList.splice(middleIndex,0,guestInMiddle);
console.log(guestList);
// guest in end of the Array
let guestInEnd:string = "Sara";
guestList.push(guestInEnd);
console.log(guestList);
// again invite new guest list
for(let guest of guestList){
    console.log(`"Hello, ${guest} I would like to invite you for dinner so come and join us."`)
}
export{guestList};
