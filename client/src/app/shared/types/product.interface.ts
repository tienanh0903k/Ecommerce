export interface IProductDetails {
    color: string;
    size: string;
    stock: number;
    image: string;
}

export interface IProduct {
    name: string;
    price: number;
    description: string;
    mainImage: string;
    details: IProductDetails[];
}
