import { Injectable, NotFoundException } from "@nestjs/common";
import { Car } from "./interfaces/cars.interface";
import { v4 as uuid } from "uuid";
import { createCarDto } from "./dto/create-car.dto";
import { updateCarDto } from "./dto/update-car.dto";

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findAllById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  createCar(car: createCarDto) {
    const newCar = {
      id: uuid(),
      ...car,
    };
    this.cars.push(newCar);
    return newCar;
  }

  updateCarDto(id: string, carUpdate: updateCarDto) {
    let carSearched = this.findAllById(id);

    this.cars = this.cars.map((car) => {
      if (car?.id === id) {
        carSearched = {
          ...carSearched,
          ...carUpdate,
          id,
        };
        return carSearched;
      } else {
        return car;
      }
    });

    return carSearched;
  }

  deleteCar(id: string) {
    const car = this.findAllById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
