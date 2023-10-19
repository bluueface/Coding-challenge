import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const ProductsList: React.FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const isError = useSelector((state: RootState) => state.products.isError);
  const error = useSelector((state: RootState) => state.products.error);

  if (isLoading) {
    return (
      <div className="List">
        <strong>Loading ...</strong>
      </div>
    );
  } else if (isError) {
    return (
      <div className="List">
        <strong>Something went wrong: {(error as Error)?.message}</strong>
      </div>
    );
  }
  return (
    <div className="products">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
