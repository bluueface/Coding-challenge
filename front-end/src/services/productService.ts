import { useQuery } from 'react-query';
import { Product } from '../models/Product';

const BASE_URL = 'https://fakestoreapi.com';

export class ProductService {
  static getAllProducts = () => {
    return useQuery('products', async (): Promise<Product[]> => {
      const res = await fetch(`${BASE_URL}/products`);
      return res.json();
    });
  };

  static getProductById(id: string | undefined) {
    return useQuery(['product', id], async (): Promise<Product> => {
      const productId = Number(id);
      if (isNaN(productId)) {
        throw new Error('Invalid product ID');
      }
      const response = await fetch(`${BASE_URL}/products/${productId}`);
      return response.json();
    });
  }
}
