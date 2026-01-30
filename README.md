# E-Commerce Product Management System - Reflection

## TypeScript Features and OOP Principles

I implemented TypeScript with strict type checking throughout the project. The `Product` class demonstrates encapsulation by managing product data and calculations internally. I used interfaces (`ProductData`) for type safety when handling API responses. The class structure promotes code reusability and maintainability through modular design.

Private methods like `calculateTax()` demonstrate proper encapsulation, keeping implementation details hidden while exposing only necessary functionality through public methods.

## Challenges and Solutions

**Challenge 1: Tax Calculation Logic**
The API doesn't provide tax or category-specific rates. I solved this by implementing a conditional tax calculator that applies 3% for groceries and 4.75% for other products, based on the product's category field.

**Challenge 2: Type Safety with API**
The Fake Store API response structure needed proper typing. I created a `ProductData` interface to ensure type safety when constructing `Product` instances from API data.

**Challenge 3: Discount Integration**
Since the API doesn't include discount data, I added an optional `discountPercentage` property to the interface and generated random discounts (0-30%) in the main application to demonstrate the discount calculator functionality.

## Asynchronous Operations and Error Management

I used `async/await` throughout for clean, readable asynchronous code. The `APIService` class handles all HTTP requests with proper error handling using try/catch blocks.

Custom error classes (`APIError`, `NetworkError`) provide specific error types for different failure scenarios. The `handleError` utility function centralizes error processing, distinguishing between API errors (with status codes), network failures, and general errors.

The application gracefully handles network failures, invalid responses, and missing data, logging appropriate error messages without crashing.

## Total Time: 3.5 hours
