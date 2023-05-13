import { Length, IsNotEmpty, IsNumber, IsBoolean } from "class-validator";

export class CreateProductDTO {
    prodId?: string;

    @IsNotEmpty({

    })
    @Length(3, 20, {
        message: 'Title must be between 3 and 20 characters'
    })
    title: string;

    @Length(3, 100)
    description: string;

    @IsNotEmpty({
        message: 'Price is required'
    })
    @IsNumber()
    price: number

    @IsBoolean()
    outOfStock: boolean;

    @IsNumber()
    quantity: number;
}