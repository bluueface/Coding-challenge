import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../models/Cart';
import UpdateQuantity from '../product/UpdateQuantity';
import {
  removeItemFromCart,
  updateItemQuantity,
} from '../../redux/reducers/cartReducer';
import { DeleteForever } from '@mui/icons-material';

interface Props {
  item: CartItem;
}

const CartItemComponent: React.FunctionComponent<Props> = (props) => {
  const { item } = props;
  const { product } = item;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (quantity) {
      dispatch(updateItemQuantity({ ...item, quantity: quantity }));
    }
  }, [quantity]);

  const removeItem = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div key={product?.id} className="item">
      <img src={product?.image} alt="image" />
      <div className="details">
        <span>{product?.title}</span>
        <strong>{`$${product?.price}`}</strong>
        <UpdateQuantity
          quantity={item.quantity}
          onChange={setQuantity}
          className="quantity quantity-card"
        />
      </div>
      <div className="remove">
        <button className="outlined" onClick={removeItem}>
          <DeleteForever sx={{ color: '#444' }} fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;
