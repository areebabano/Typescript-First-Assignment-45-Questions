function create_car(manufacturer: string, model: string,...
properties:[string,any][]):any{
    const car: any ={
        manufacturer,
        model,
    }
    for(const [key, value] of properties){
        car[key] = value;
    }
    return car;
}
const mycar:string = create_car("Toyota","Corolla",
["Features","Sunroof"],["color","red"]);

console.log(mycar);