"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.category = data.category;
        this.image = data.image;
        this.rating = data.rating;
        this.discountPercentage = data.discountPercentage || 0;
    }
    displayDetails() {
        const discount = this.getPriceWithDiscount();
        const tax = this.calculateTax();
        const finalPrice = discount + tax;
        return `
Product: ${this.title}
Category: ${this.category}
Original Price: $${this.price.toFixed(2)}
Discount: ${this.discountPercentage}% (-$${(this.price - discount).toFixed(2)})
Price After Discount: $${discount.toFixed(2)}
Tax: $${tax.toFixed(2)}
Final Price: $${finalPrice.toFixed(2)}
Rating: ${this.rating.rate}/5 (${this.rating.count} reviews)
    `.trim();
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage / 100);
    }
    calculateTax() {
        const taxRate = this.category === 'groceries' ? 0.03 : 0.0475;
        return this.getPriceWithDiscount() * taxRate;
    }
}
exports.Product = Product;
