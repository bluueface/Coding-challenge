import React from 'react';
import { Product } from '../models/Product';
import { useNavigate } from 'react-router-dom';
import CardBody from './CardBody';

interface Props {
  product: Product;
}
const ProductCard: React.FunctionComponent<Props> = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/products/${product.id}`)}>
      <img src={product.image} alt="image" />
      <CardBody product={product} />
    </div>
  );
};

export default ProductCard;
