import React from 'react';
import Button from '../common/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import CartItemComponent from './CartItem';

const Cart: React.FunctionComponent = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

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

  return (
    <div className="cart">
      <div className="items">
        {cartItems.map((item) => (
          <CartItemComponent key={item?.product?.id} item={item} />
        ))}
      </div>
      <div className="validate">
        {renderValueLabel('Subtotal', 150)}
        {renderValueLabel('Shipping', 150)}
        <hr className="hr" />
        {renderValueLabel('Total amount', 150, 'bold')}
        <Button label="Validate" onClick={() => {}} className="btn" />
      </div>
    </div>
  );
};
export default Cart;
