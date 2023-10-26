# Coding Challenge 

## 1. Front End

Build a mini eCommerce website where users can browse and purchase products. You can
use the [Fake Store API](https://fakestoreapi.com) as the backend API for fetching data. The
application should include the following features:

- Product Listing: Display a list of products with their image, names, prices, and
ratings.
- Product Details: When a user clicks on a product, show the detailed information of
that product, including title, description, category and ratings.
- Shopping Cart: Allow users to add products to a shopping cart and display the total
number of items in the cart. Include features like increasing or decreasing the
quantity of items in the cart, removing items, and displaying the total price.
- 
Remember to structure your codebase using component-based architecture, separate
concerns using Redux for state management, use React Query for data fetching, follow best
practices for writing clean and maintainable code, and utilizing modern features like React
hooks and functional components
For styling, use Sass to style your components.
Additionally, implement the following testing strategies:

- E2e Tests: Write end-to-end tests using Cypress to simulate user flows and
interactions. For adding items to the cart.
- Unit Tests: Write a unit test example using react-testing-library.

## 2. Back End:

We have a store where we list our products, and we want to expose APIs to get details and
manage those products.

A product is identified by SKU (Stock Keeping Unit), has a name, description and price.

Tasks:

- find and complete the missing implementation of this API: /product/{sku}
- add an endpoint to get list of product details by list of SKUs:
/products?skus=123,4567,8901,2345,67789
- we want to add stock information to the product, for that we want to extend the database
schema (check flyway) and get the information in this API: /product/{sku}
- Add an endpoint to add product.
- add an endpoint to partially update a product (updating name, description and price).
- add unit test to the controller API you exposed in 1 and 4
- put your Java application into Docker container and document in README file how to use it.
