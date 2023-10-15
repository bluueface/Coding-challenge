import React from 'react';
import { Product } from '../models/Product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}
const ProductsList: React.FunctionComponent<Props> = (props) => {
  const { products, isLoading, isError, error } = props;
  if (isLoading) {
    return (
      <div className="List">
        <strong>Loading ...</strong>
      </div>
    );
  } else if (isError) {
    return (
      <div className="List">
        <strong>Something went wrong: {error?.message}</strong>
      </div>
    );
  }
  return (
    <div className="List">
      <strong>Products</strong>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
