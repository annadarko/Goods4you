import { Product } from "./Product";

export type CartProduct = Product & {
    quantity: number;
    discountPercentage?: number;
    thumbnail?: string;
};

export interface User {
totalQuantity: number;
totalProducts: number;
discountedTotal: number;
total: number;
products: Product[];
}