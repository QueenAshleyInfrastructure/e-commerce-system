"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    return price * discountPercentage / 100;
}
