import { Controller, Post, Get } from "@nestjs/common";


@Controller('products')
export class ProductsController {
    private products = [];

    @Post('/add')
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number) {
        const prodId = new Date().toString();
        const newProduct = { id: prodId, title: prodTitle, description: prodDesc, price: prodPrice };
        this.products.push(newProduct);
        return prodId;
    }

    @Get('/getAll')
    getAllProduct() {
        return [...this.products];
    }
}
