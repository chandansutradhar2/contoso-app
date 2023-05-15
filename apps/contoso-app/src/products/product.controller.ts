import { Controller, Post, Get, Body } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { UpdateProductQtyDTO } from "./dtos/update-qty.dto";
import { ProductService } from "./product.service";


@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) {
    }

    @Post('/add')
    async addProduct(@Body() body: CreateProductDTO) {
        console.log(body);
       return await this.productService.addProduct(body);
    }

    @Get('/getAll')
    async getAllProduct() {
        return await this.productService.getAllProduct();
    }


    @Post('/updateQty')
    updateProductQty(@Body() body: UpdateProductQtyDTO) {

    }
}
