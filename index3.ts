let PersonName: string = "Areeba hammad";
// name in lowercase
let lowerCaseName: string = PersonName.toLowerCase();
console.log(`lowercase: ${lowerCaseName}`);
// name in uppercase
let upperCaseName: string = PersonName.toUpperCase();
console.log(`uppercase: ${upperCaseName}`);
// name in titlecase
let words:string[] = PersonName.split(" ");
let titleCaseName:string = "";
for(let a=0; a<words.length; a++){

    titleCaseName +=words[a].charAt(0).toUpperCase()+words[a].slice(1)+" ";
}
console.log(`titlecase: ${titleCaseName}`);

