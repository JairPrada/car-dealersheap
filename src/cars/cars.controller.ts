import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id) {
    return this.carsService.findAllById(id);
  }
  @Post('')
  updateCar() {
    return "Car updated";
  }
  @Patch()
  updateAllCars() {
    return "All cars updated";
  }
  @Delete()
  deleteCar(@Body() Body: any) {
    return "Car deleted";
  }
}
