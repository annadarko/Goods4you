export const ROUTES = {
    home: '/',
    login: '/login',
    cart: '/cart',
    product: '/product/:id',
    catalog: '/#Catalog',
    faq: '/#FAQ',
} as const;

export const getProductRoute = (id: string | number) => ROUTES.product.replace(':id', String(id));
