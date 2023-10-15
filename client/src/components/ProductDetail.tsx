import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../services/productService';

const ProductDetail: React.FunctionComponent = () => {
  const { productId } = useParams();

  const { isLoading, isError, data, error } =
    ProductService.getProductById(productId);

  if (isLoading) {
    return (
      <div className="Detail">
        <strong>Loading...</strong>
      </div>
    );
  } else if (isError) {
    return (
      <div className="Detail">
        <strong>Something went wrong: {(error as Error)?.message}</strong>
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
