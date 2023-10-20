import { Product } from './Product';

export interface CartItem {
  product: Product | undefined;
  quantity: number;
}
