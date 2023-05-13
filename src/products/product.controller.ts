import { Controller, Post, Get, Body } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { UpdateProductQtyDTO } from "./dtos/update-qty.dto";


@Controller('products')
export class ProductController {
    private products = [];

    @Post('/add')
    addProduct(@Body() body: CreateProductDTO) {
        console.log(body);
        const prodId = Date.now().toString();
        const newProduct = {
            id: prodId,
            title: body.title,
            description: body.description,
            price: body.price
        };
        this.products.push(newProduct);
        return prodId;
    }

    @Get('/getAll')
    getAllProduct() {
        return [...this.products];
    }


    @Post('/updateQty')
    updateProductQty(@Body() body: UpdateProductQtyDTO) {

    }
}
