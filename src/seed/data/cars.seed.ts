import { Car } from "src/cars/interfaces/cars.interface";
import { v4 as uuid } from "uuid";

export const CAR_SEED: Car[] = [
  {
    id: uuid(),
    brand: "bmw",
    name: "3 Series",
  },
  {
    id: uuid(),
    brand: "audi",
    name: "A4",
  },
  {
    id: uuid(),
    brand: "mazda",
    name: "3",
  },
  {
    id: uuid(),
    brand: "toyota",
    name: "land cruiser",
  },
];
