const MagicianNames: string[] = [
    "David Blaine",
    "Dynamo",
    "Ricky Jay",
    "David Copperfield",
    "Harry Potter"
];

function makeGreat(magicians : string[]): void{
    for(let i = 0; i<magicians.length; i++){
     magicians[i] = "the great" + magicians[i]
    }
}

function showMagician(magicians : string[]): void{
    for(const magician of magicians){
        console.log(magician);
    }
}


makeGreat(MagicianNames);
console.log("great magicians:")
showMagician(MagicianNames);
