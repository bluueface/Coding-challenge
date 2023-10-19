import React, { ReactNode } from 'react';
import { Product } from '../../models/Product';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

interface Props {
  product: Product;
}
const ProductCardBody: React.FunctionComponent<Props> = (props) => {
  const { product } = props;

  const containedStars = (number: number) => {
    const stars: ReactNode[] = [];

    for (let i = 0; i < number; i++) {
      stars.push(<Star key={i} fontSize="small" color={'warning'} />);
    }
    return stars;
  };

  const outlinedStars = (number: number) => {
    const stars: ReactNode[] = [];

    for (let i = 0; i < number; i++) {
      stars.push(
        <StarBorder key={6 - number + i} fontSize="small" color={'warning'} />,
      );
    }
    return stars;
  };

  const renderRatingStars = (rate: number) => {
    if (rate % 1 === 0) {
      return containedStars(rate).concat(outlinedStars(5 - rate));
    } else {
      const ratingStars: ReactNode[] = containedStars(Math.trunc(rate));
      ratingStars.push(
        <StarHalf
          key={Math.trunc(rate) + 1}
          fontSize="small"
          color={'warning'}
        />,
      );
      return ratingStars.concat(outlinedStars(4 - Math.trunc(rate)));
    }
  };

  return (
    <div className="card-body">
      <span>{product.title}</span>
      <strong>{`${product.price} $`}</strong>
      <div>
        {renderRatingStars(product.rating.rate)}
        <span>({product.rating.count})</span>
      </div>
    </div>
  );
};

export default ProductCardBody;
