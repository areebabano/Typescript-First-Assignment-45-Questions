function makeShirts(size: string = "large", message: string = "I LOVE Typescript."): void {
    return console.log(`size: ${size} , message: ${message}`);
    
}
// large shirt
makeShirts();
// medium shirt
makeShirts("medium");
// small shirt
makeShirts("small","Keep Calm & Typescript ON!");
// excel shirt
makeShirts("excel","I like Coding.");