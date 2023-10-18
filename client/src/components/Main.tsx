import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <main className="body">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
