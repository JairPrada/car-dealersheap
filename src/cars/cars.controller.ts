import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id) {
    return this.carsService.findAllById(id);
  }
  @Post('')
  createCar(@Body() createCar: createCarDto) {
    return this.carsService.createCar(createCar);
  }
  @Patch(':id')
  updateAllCars(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id,
    @Body() updateCar: updateCarDto) {
    return this.carsService.updateCarDto(id, updateCar);
  }
  @Delete(":id")
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id) {
    return this.carsService.deleteCar(id);
  }
}
