let favTransportation:Array<[brand:string,transport:string]> = [];
favTransportation.push(["Corolla","car"]);
favTransportation.push(["Honda","Motorcycle"]);
favTransportation.push(["Revo","car"]);
favTransportation.push(["Unique","Bike"]);

// console.log(favTransportation);
// use foreach loop to print a message 
favTransportation.forEach(([brand,transport])=>{
    console.log(`"I would like to own a ${brand} ${transport}."`)
}

)