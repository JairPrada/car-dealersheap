import { IsString, IsUUID, IsOptional } from 'class-validator';
export class updateCarDto {
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
}