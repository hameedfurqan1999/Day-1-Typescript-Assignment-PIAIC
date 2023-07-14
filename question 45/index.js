"use strict";
function store_car_info(manufacturer, model, ...args) {
    let car_info = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = args[i + 1];
        car_info[key] = value;
    }
    return car_info;
}
// Calling the function with required information and additional name-value pairs
let car_info = store_car_info("Toyota", "Camry", "color", "Blue", "year", 2022, "fuelType", "Petrol");
// Printing the object to verify the stored information
console.log(car_info);
