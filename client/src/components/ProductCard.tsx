import React from 'react';
import { Product } from '../models/Product';
import { Link } from 'react-router-dom';

interface Props {
  product: Product;
}
const ProductCard: React.FunctionComponent<Props> = (props) => {
  const { product } = props;
  return (
    <div className="Card">
      <Link to={`/products/${product.id}`}>
        <strong>{product.title}</strong>
      </Link>
    </div>
  );
};

export default ProductCard;
