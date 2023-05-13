export interface CreateProductDTO {
    prodId?: string;
    title: string;
    description: string;
    price: number
    outOfStock: boolean;
    quantity: number;
}