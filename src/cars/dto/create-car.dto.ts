import { IsString } from "class-validator";

export class createCarDto {
    @IsString({ message: 'Brand must be a string value personal JP'})
    readonly brand: string;
    @IsString()
    readonly name: string;
}