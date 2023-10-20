import React from 'react';
import Button from '../common/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import CartItemComponent from './CartItem';
import ChangeHeaderStyle from '../common/ChangeHeaderStyle';

const Cart: React.FunctionComponent = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  let totalItems = 0;

  for (const item of cartItems) {
    totalItems = totalItems + item.quantity;
  }

  const renderValueLabel = (
    label: string,
    value: number,
    className?: string,
  ) => (
    <div className={`cost ${className}`}>
      <span>{label}:</span>
      <span>{`$${value}`}</span>
    </div>
  );

  if (totalItems === 0) {
    return (
      <div className="empty-cart margin-top">
        <strong>No item in the cart</strong>
      </div>
    );
  }

  return (
    <ChangeHeaderStyle>
      <div className="cart margin-top">
        <div className="items">
          {cartItems.map((item) => (
            <CartItemComponent key={item?.product?.id} item={item} />
          ))}
        </div>
        <div className="validate">
          {renderValueLabel('Subtotal', 150)}
          {renderValueLabel('Shipping', 0)}
          <hr className="hr" />
          {renderValueLabel('Total amount', 150, 'bold')}
          <Button label="Validate" onClick={() => {}} className="btn" />
        </div>
      </div>
    </ChangeHeaderStyle>
  );
};
export default Cart;
