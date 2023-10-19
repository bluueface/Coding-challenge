import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductService } from '../../services/productService';
import ProductCardBody from './ProductCardBody';
import Button from '../common/Button';
import { CheckCircle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import {
  addItemToCart,
  increaseItemQuantity,
} from '../../redux/reducers/cartReducer';
import { CartItem } from '../../models/Cart';
import IncreaseDecreaseQuantity from '../common/IncreaseDecreaseQuantity';

const ProductDetail: React.FunctionComponent = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [quantity, setQuantity] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isLoading, isError, data, error } =
    ProductService.getProductById(productId);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigateTo = () => navigate('/cart');

  const addToCart = () => {
    let items: CartItem[] = [];
    items = items.concat(cartItems);
    const itemToBeAdded = { product: data, quantity: quantity };

    if (items.find((item) => item.product?.id === data?.id)) {
      dispatch(increaseItemQuantity(itemToBeAdded));
    } else {
      items.push(itemToBeAdded);
      dispatch(addItemToCart(items));
    }
  };

  const renderModel = () => (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="success">
          <CheckCircle color="success" fontSize="large" />
          <h2>Product added</h2>
        </div>
        <div className="buttons">
          <Button
            label="Continue shopping"
            onClick={closeModal}
            className="btn outlined"
          />
          <Button
            label="To the shopping cart"
            onClick={navigateTo}
            className="btn"
          />
        </div>
      </div>
    </div>
  );

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
            <ProductCardBody product={data} />
            <hr className="hr" />
            <div className="category">
              <span>Category: </span>
              <strong>{data.category}</strong>
            </div>
            <IncreaseDecreaseQuantity
              quantity={quantity}
              onChange={setQuantity}
              className="quantity"
            >
              <Button
                label="Add to cart"
                onClick={() => {
                  addToCart();
                  openModal();
                }}
                className="btn"
              />
            </IncreaseDecreaseQuantity>
            <hr className="hr" />
            <div>
              <span>Description: </span>
              <p className="description">{data.description}</p>
            </div>
          </div>
        </>
      )}
      {isOpen && renderModel()}
    </div>
  );
};

export default ProductDetail;
