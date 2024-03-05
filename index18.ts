let favPlaces:Array<string> = [
    "Silicon Valley",
    "New York",
    "Russia",
    "China",
    "Plastine"
];
console.log(" Array in its original order:");
console.log(favPlaces);
// alphabetic order
console.log(" Array in alphabetic order:");
console.log([...favPlaces].sort());
// original order
console.log(" Again array in its original order:");
console.log(favPlaces);
// reverse alphabetic order
console.log(" Array reverse in alphabetic order");
console.log([...favPlaces].sort().reverse());
// original order
console.log(" Again array in its original order:");
console.log(favPlaces);
// reverse order
console.log(" Array in reverse order:");
console.log(favPlaces.reverse());
// reverse again 
console.log(" Again reverse array turn its original order:");
console.log(favPlaces.reverse());
// again in alphabetic order
console.log(" Array again in alphabetic order:");
console.log(favPlaces.sort());
// again reverse in alphabetic order
console.log(" Array reverse in alphabetic order:");
console.log(favPlaces.sort().reverse());