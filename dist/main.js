"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    const apiService = new apiService_1.APIService();
    try {
        console.log('Fetching products from API...\n');
        const productsData = await apiService.fetchProducts();
        const products = productsData.slice(0, 5).map(data => {
            const discountPercentage = Math.floor(Math.random() * 30);
            return new Product_1.Product({ ...data, discountPercentage });
        });
        console.log('='.repeat(60));
        console.log('E-COMMERCE PRODUCT MANAGEMENT SYSTEM');
        console.log('='.repeat(60));
        console.log('\n');
        products.forEach((product, index) => {
            console.log(`Product ${index + 1}:`);
            console.log(product.displayDetails());
            console.log('\n' + '-'.repeat(60) + '\n');
        });
        console.log('\nFetching single product details...\n');
        const singleProductData = await apiService.fetchProduct(1);
        const singleProduct = new Product_1.Product({ ...singleProductData, discountPercentage: 15 });
        console.log('Single Product Details:');
        console.log(singleProduct.displayDetails());
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
        process.exit(1);
    }
}
main();
