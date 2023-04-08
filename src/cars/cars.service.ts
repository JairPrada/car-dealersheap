import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid'
@Injectable()
export class CarsService {
    private cars: Car[] = [{
        id: uuid(),
        brand: 'BMW',
        name: "BMW 3 Series"
    }, {
        id: uuid(),
        brand: 'AUDI',
        name: "AUDI A4"
    }, {
        id: uuid(),
        brand: "MAZDA",
        name: "3"
    }
    ];
    findAll() {
        return this.cars;
    }
    findAllById(id: string) {
        return this.cars.find(car => car.id === id) || "Car not found"
    }

}
