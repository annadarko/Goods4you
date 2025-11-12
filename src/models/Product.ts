export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    discountPercentage: number;
    stock: number;
    quantity?: number;
    warrantyInformation?: string;
    shippingInformation?: string;
}