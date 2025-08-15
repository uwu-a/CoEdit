import http from './http.ts'

export function getProductList() {
    return http.get('/products');
}