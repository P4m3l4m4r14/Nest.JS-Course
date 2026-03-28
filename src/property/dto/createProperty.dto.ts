import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(5, 10, { message: 'error length'}) // Decorator to validate that the string has a length between 5 and 10 characters
        name: string;
    @IsString()
        description: string;
    @IsNumber()
    @IsPositive()
        area: number;
}