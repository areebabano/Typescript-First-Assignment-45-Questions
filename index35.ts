let animals: string[] = ["Goat","Dog","Cat"];
console.log("List of animals");
for(let animal of animals){
    console.log(animal);
}
for(let animal of animals){
    if(animal === "Goat"){
        console.log(`A ${animal} is an adorable pet that also give us milk.`)
    } else if(animal === "Dog"){
        console.log(`A ${animal} is a great pet`);
    } else if(animal === "Cat"){
        console.log(`A ${animal} would be a good companon at home. `)
    }
}

console.log("\nAny of these animals would make a great pet!")