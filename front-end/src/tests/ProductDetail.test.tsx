import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Product } from '../models/Product';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

interface response {
  isLoading: boolean;
  isError: boolean;
  data: Product | undefined;
  error: Error | null;
}

// Mock the ProductService module
jest.mock('../services/productService', () => {
  return {
    ProductService: {
      getProductById: jest.fn(),
    },
  };
});

describe('ProductDetail Component', () => {
  const queryClient = new QueryClient();

  const renderProductDetail = (mockReturnValue: response) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../services/productService').ProductService.getProductById.mockReturnValue(
      mockReturnValue,
    );

    return render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter initialEntries={['/products/1']}>
            <Routes>
              <Route path="products/:productId" element={<ProductDetail />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>,
    );
  };

  it('If the data is still loading, render Loading component', async () => {
    const mockReturnValue = {
      isLoading: true,
      isError: false,
      data: undefined,
      error: null,
    };
    renderProductDetail(mockReturnValue);

    // Assert that the Loading component is displayed
    const loadingElement = screen.getByAltText('loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('If there is an error occurred, render Error component', async () => {
    const mockReturnValue = {
      isLoading: false,
      isError: true,
      data: undefined,
      error: {
        name: 'error',
        message: 'Test error',
      } as Error,
    };
    renderProductDetail(mockReturnValue);

    // Assert that the Error component is displayed
    const errorElement = screen.getByText('Something went wrong: Test error');
    expect(errorElement).toBeInTheDocument();
  });

  it('If the data loaded correctly, display the product details', async () => {
    const mockReturnValue = {
      isLoading: false,
      isError: false,
      data: {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      error: null,
    };
    renderProductDetail(mockReturnValue);

    // Assert that the product details are displayed
    const productImage = screen.getByAltText('product-image');
    const productTitle = screen.getByText(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    );
    expect(productImage).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
  });
});
