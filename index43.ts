const magician_names: string[] = [
    "David Blaine",
    "Dynamo",
    "Ricky Jay",
    "David Copperfield",
    "Harry Potter"
];

function show_magicians(magicians : string[]): void{
    for(const magician of magicians){
        console.log(magician);
    }
}
function make_great(magicians : string[]): string[]{
    const greatMagicians : string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}
const greatMagiciansNames = make_great(magician_names)
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("Great Magicians:");
show_magicians(greatMagiciansNames);