import { ProductData } from '../models/Product';
import { APIError, NetworkError } from '../utils/errorHandler';

export class APIService {
  private baseURL = 'https://fakestoreapi.com';

  async fetchProducts(): Promise<ProductData[]> {
    try {
      const response = await fetch(`${this.baseURL}/products`);
      
      if (!response.ok) {
        throw new APIError(`Failed to fetch products`, response.status);
      }

      const data = await response.json() as ProductData[];
      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new NetworkError('Network connection failed');
      }
      throw error;
    }
  }

  async fetchProduct(id: number): Promise<ProductData> {
    try {
      const response = await fetch(`${this.baseURL}/products/${id}`);
      
      if (!response.ok) {
        throw new APIError(`Failed to fetch product ${id}`, response.status);
      }

      const data = await response.json() as ProductData;
      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new NetworkError('Network connection failed');
      }
      throw error;
    }
  }
}
