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
} from './redux/reducers/productReducer';
import { ProductService } from './services/productService';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const response = ProductService.getAllProducts();

  useEffect(() => {
    if (response.isError) {
      dispatch(loadProductsFailure(response.error));
    } else if (response.isSuccess) {
      dispatch(loadProductsSuccess(response.data));
    }
  }, [response]);

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
};

export default App;
