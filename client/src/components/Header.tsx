import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();

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
            <div onClick={() => navigate('/products')}>
              <ShoppingCart
                sx={{ color: 'black', fontSize: '1.5rem', alignSelf: 'center' }}
              />
              <span>15</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
