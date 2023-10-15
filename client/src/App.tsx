import React from 'react';
import './App.scss';
import Main from './components/Main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import { ProductService } from './services/ProductService';

function App() {
  const { isLoading, isError, data, error } = ProductService.useFetchProducts();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={
            <ProductsList
              products={data}
              isLoading={isLoading}
              isError={isError}
              error={error}
            />
          }
        />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
