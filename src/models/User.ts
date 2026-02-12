import { Product } from "./Product";

export type CartProduct = Product & {
    quantity: number;
    discountPercentage?: number;
    thumbnail?: string;
};

export interface User {
id: number;
totalQuantity: number;
totalProducts: number;
discountedTotal: number;
total: number;
products: CartProduct[];
}