"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIService = void 0;
const errorHandler_1 = require("../utils/errorHandler");
class APIService {
    constructor() {
        this.baseURL = 'https://fakestoreapi.com';
    }
    async fetchProducts() {
        try {
            const response = await fetch(`${this.baseURL}/products`);
            if (!response.ok) {
                throw new errorHandler_1.APIError(`Failed to fetch products`, response.status);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            if (error instanceof TypeError) {
                throw new errorHandler_1.NetworkError('Network connection failed');
            }
            throw error;
        }
    }
    async fetchProduct(id) {
        try {
            const response = await fetch(`${this.baseURL}/products/${id}`);
            if (!response.ok) {
                throw new errorHandler_1.APIError(`Failed to fetch product ${id}`, response.status);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            if (error instanceof TypeError) {
                throw new errorHandler_1.NetworkError('Network connection failed');
            }
            throw error;
        }
    }
}
exports.APIService = APIService;
