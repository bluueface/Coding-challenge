import { useQuery } from 'react-query';
import { Product } from '../models/Product';

const BASE_URL = 'https://fakestoreapi.com';

export class ProductService {
  static useFetchProducts = () => {
    return useQuery<Product[], Error>('products', async () => {
      const res = await fetch(`${BASE_URL}/products`);
      return res.json();
    });
  };

  static useFetchProduct(id: string | undefined) {
    return useQuery<Product, Error>(['product', id], async () => {
      const productId = Number(id);
      if (isNaN(productId)) {
        throw new Error('Invalid product ID');
      }
      const response = await fetch(`${BASE_URL}/products/${productId}`);
      return response.json();
    });
  }
}
