import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../services/productService';
import CardBody from './CardBody';

const ProductDetail: React.FunctionComponent = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState<number>(1);

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
    <div className="product-details">
      {data && (
        <>
          <div className="image-wrapper">
            <img src={data?.image} alt="logo" />
          </div>
          <div className="details">
            <CardBody product={data} />
            <hr className="hr" />
            <div className="category">
              <span>Category: </span>
              <strong>{data.category}</strong>
            </div>
            <div className="actions">
              <span>Quantity: </span>
              <div>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn">Add to cart</button>
            </div>
            <hr className="hr" />
            <div>
              <span>Description: </span>
              <p className="description">{data.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
