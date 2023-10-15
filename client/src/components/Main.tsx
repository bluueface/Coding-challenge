import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Main</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
