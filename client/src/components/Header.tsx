import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { length } = cartItems;
  let totalItems = 0;

  for (const item of cartItems) {
    totalItems = totalItems + item.quantity;
  }

  console.log('cartItems ===>', cartItems);

  const renderNavItem = (to: string, label: string) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
      >
        {label}
      </NavLink>
    </li>
  );
  return (
    <header className="header">
      <nav className="nav">
        <img
          src={require('../logo.png')}
          alt="logo"
          className="nav-logo"
          id="logo"
        />
        <ul className="nav-links">
          {renderNavItem('', 'Home')}
          {renderNavItem('/products', 'Products')}
          <li>
            <div onClick={() => navigate('/cart')}>
              <ShoppingCart
                sx={{ color: 'black', fontSize: '1.5rem', alignSelf: 'center' }}
              />
              {length > 0 && <span>{totalItems}</span>}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
