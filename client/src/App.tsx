import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import {
  loadProductsFailure,
  loadProductsSuccess,
  startLoading,
} from './redux/reducers/productReducer';
import { ProductService } from './services/productService';

function App() {
  const dispatch = useDispatch();
  try {
    const response = ProductService.getAllProducts();
    if (response.isError) {
      dispatch(loadProductsFailure(response.error));
    } else if (response.isSuccess) {
      dispatch(loadProductsSuccess(response.data));
    }
  } catch (error) {
    dispatch(loadProductsFailure(error));
  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Route>,
    ),
  );

  return <RouterProvider router={routes} />;
}

export default App;
