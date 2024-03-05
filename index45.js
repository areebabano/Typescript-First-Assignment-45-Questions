"use strict";
function create_car(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const mycar = create_car("Toyota", "Corolla", ["Features", "Sunroof"], ["color", "red"]);
console.log(mycar);
