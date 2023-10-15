import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';

const ProductDetail: React.FunctionComponent = () => {
  const { productId } = useParams();

  const { isLoading, isError, data, error } =
    ProductService.useFetchProduct(productId);

  console.log(ProductService.useFetchProduct(productId));

  if (isLoading) {
    return (
      <div className="Detail">
        <strong>Loading...</strong>
      </div>
    );
  } else if (isError) {
    return (
      <div className="Detail">
        <strong>Something went wrong: {error?.message}</strong>
      </div>
    );
  }

  return (
    <div className="Detail">
      <strong>{data?.description}</strong>
    </div>
  );
};

export default ProductDetail;
