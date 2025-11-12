export const calcDiscounted = (price: number, discountPercentage: number) =>
    Number((price * (1 - discountPercentage / 100)).toFixed(2));