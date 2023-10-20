import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';
import ChangeHeaderStyle from '../common/ChangeHeaderStyle';

const ProductsList: React.FunctionComponent = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const isError = useSelector((state: RootState) => state.products.isError);
  const error = useSelector((state: RootState) => state.products.error);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <ErrorMessage message={(error as Error).message} />;
  }
  return (
    <ChangeHeaderStyle>
      <div className="products margin-top">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ChangeHeaderStyle>
  );
};

export default ProductsList;
