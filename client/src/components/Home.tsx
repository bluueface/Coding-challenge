import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <Link to={`/products`}>
        <strong>Home Page</strong>
      </Link>
    </div>
  );
};

export default Home;
