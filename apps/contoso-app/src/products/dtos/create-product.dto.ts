import { ApiProperty } from "@nestjs/swagger";
import { Length, IsNotEmpty, IsNumber, IsBoolean } from "class-validator";

export class CreateProductDTO {


    id?: string;


    @ApiProperty()
    @IsNotEmpty({

    })
    @Length(3, 20, {
        message: 'Title must be between 3 and 20 characters'
    })
    title: string;

    @ApiProperty()
    @Length(3, 100)
    description: string;

    @ApiProperty()
    @IsNotEmpty({
        message: 'Price is required'
    })
    @IsNumber()
    price: number

    @ApiProperty()
    @IsBoolean()
    outOfStock: boolean;

    @ApiProperty()
    @IsNumber()
    quantity: number;
}