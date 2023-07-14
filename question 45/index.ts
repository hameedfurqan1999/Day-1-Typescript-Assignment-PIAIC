type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function store_car_info(manufacturer: string, model: string, ...args: any[]): CarInfo {
    let car_info: CarInfo = {
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < args.length; i += 2) {
        let key: string = args[i];
        let value: any = args[i + 1];
        car_info[key] = value;
    }

    return car_info;
}

let car_info: CarInfo = store_car_info("Toyota", "Camry", "color", "Blue", "year", 2022, "fuelType", "Petrol");

console.log(car_info);
