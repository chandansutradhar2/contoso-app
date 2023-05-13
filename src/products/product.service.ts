import { Neo4jService } from "@dbc-tech/nest-neo4j";
import { Injectable } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";

@Injectable()
export class ProductService {

    constructor(private readonly neo4jService: Neo4jService) {
        console.log("ProductService constructor");
    }


    async addProduct(dto: CreateProductDTO) {

        const id = Date.now().toString();
        const result = await this.neo4jService.write(`CREATE (p:Product 
            {   id:$id,
                title: $title,
                price: $price,
                quantity: $quantity,
                description: $description,
                outOfStock:$outOfStock }) RETURN p`, { id, ...dto });
        console.log(result);
        return id;
    }

}