import { Product } from "./Product";

export interface User {
totalQuantity: number;
totalProducts: number;
discountedTotal: number;
total: number;
products: Product[];
}