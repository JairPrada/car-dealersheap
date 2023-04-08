import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [{
        id: 1,
        brand: 'BMW',
        name: "BMW 3 Series"
    }, {
        id: 2,
        brand: 'AUDI',
        name: "AUDI A4"
    }, {
        id: 3,
        brand: "MAZDA",
        name: "3"
    }
    ];
    findAll() {
        return this.cars;
    }
    findAllById(id: number) {
        return this.cars.find(car => car.id === id) || "Car not found"
        // if (id > this.cars.length) {
        //     return 'Car not found';
        // } else {
        //     return this.cars[id];
        // }

    }

}
