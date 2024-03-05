const magicianNames: string[] = [
    "David Blaine",
    "Dynamo",
    "Ricky Jay",
    "David Copperfield",
    "Harry Potter"
];

function showMagicians(magicians : string[]): void{
    for(const magician of magicians){
        console.log(magician);
    }
}

showMagicians(magicianNames);