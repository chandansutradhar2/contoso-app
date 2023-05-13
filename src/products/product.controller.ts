import { Controller, Post, Get, Body } from "@nestjs/common";


@Controller('products')
export class ProductController {
    private products = [];

    @Post('/add')
    addProduct(@Body() body: { prodTitle: string, prodDesc: string, prodPrice: number }) {
        const prodId = Date.now().toString();
        const newProduct = {
            id: prodId,
            title: body.prodTitle,
            description: body.prodDesc,
            price: body.prodPrice
        };
        this.products.push(newProduct);
        return prodId;
    }

    @Get('/getAll')
    getAllProduct() {
        return [...this.products];
    }
}
