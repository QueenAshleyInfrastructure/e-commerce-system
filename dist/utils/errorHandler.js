"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = exports.APIError = void 0;
exports.handleError = handleError;
class APIError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}
exports.APIError = APIError;
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
function handleError(error) {
    if (error instanceof APIError) {
        console.error(`API Error (${error.statusCode}): ${error.message}`);
    }
    else if (error instanceof NetworkError) {
        console.error(`Network Error: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    }
    else {
        console.error('An unknown error occurred');
    }
}
