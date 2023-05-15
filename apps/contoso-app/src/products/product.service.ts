import { Neo4jService } from "@dbc-tech/nest-neo4j";
import { Injectable } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductRepository } from "./product.repository";

@Injectable()
export class ProductService {


    constructor(private readonly productRepo: ProductRepository) {
        console.log("ProductService constructor");
    }


    async addProduct(dto: CreateProductDTO) {

        const id = Date.now().toString();
        const query = `CREATE (p:Product 
            {   id:$id,
                title: $title,
                price: $price,
                quantity: $quantity,
                description: $description,
                outOfStock:$outOfStock }) RETURN p`;
        const params = {
            id,
            ...dto
        }

        const result = await this.productRepo.addNode(query, params);
        console.log(result);
        return id;
    }

    async getAllProduct() {
        // const results = await this.neo4jService.read(`MATCH (q:Product) RETURN q`);
        // console.log(results.records)
        // return results.records.map(r => r.get('q').properties);

    }
}