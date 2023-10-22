const url = 'http://localhost:3000/products/3';

describe('Product Detail Page', () => {
  beforeEach(() => {
    // Visit the Product Detail page
    cy.visit(url);
  });

  it('should display product details', () => {
    cy.url().should('include', url);

    // Check if the product details are displayed
    cy.get('.product-details').should('be.visible');
  });

  it('Should: increase/decrease the product quantity from the product details page', () => {
    // click on + button to increase the quantity
    cy.get('.actions button').contains('+').click();

    // Verify that the quantity has increased
    cy.get('.actions span').should('contain', '2'); // Adjust the selector as needed

    // click on - button to increase the quantity
    cy.get('.actions button').contains('-').click();

    // Verify that the quantity has decreased
    cy.get('.actions span').should('contain', '1');
  });

  it('should add a product to the cart and continue exploring the products list when continue shopping button clicked ', () => {
    // You should first confirm that the modal is not visible on page load
    cy.get('.modal').should('not.exist');

    // Click the "Add to Cart" button
    cy.get('.btn').contains('Add to cart').click();

    // Verify that the modal for successful addition is displayed
    cy.get('.modal.open').should('be.visible');

    // Close the modal by clicking "Continue shopping" button
    cy.get('.modal .btn.outlined').contains('Continue shopping').click();

    // Verify that the modal is now hidden
    cy.get('.modal').should('not.exist');

    // Verify that the shopping cart items quantity increased
    cy.get('.nav span').should('be.visible');
    cy.get('.nav span').should('contain', 1);
  });

  it('should add a product to the cart and navigate to the shopping cart when To the shopping cart button clicked', () => {
    // Click the "Add to Cart" button
    cy.get('.btn').contains('Add to cart').click();

    // Verify that the modal for successful addition is displayed
    cy.get('.modal.open').should('be.visible');

    // Click the "To the shopping cart" button in the modal
    cy.get('.modal.open').contains('To the shopping cart').click();

    // Verify that the user is navigated to the cart page
    cy.url().should('include', '/cart');
  });

  it('should increase/decrease the quantity , remove an item from the shopping cart page', () => {
    // Click the "Add to Cart" button
    cy.get('.btn').contains('Add to cart').click();

    // Click the "To the shopping cart" button in the modal
    cy.get('.modal.open').contains('To the shopping cart').click();

    // click on + button to increase the quantity
    cy.get('.actions button').contains('+').click();

    // Verify that the quantity has increased
    cy.get('.actions span').should('contain', '2'); // Adjust the selector as needed

    // click on - button to increase the quantity
    cy.get('.actions button').contains('-').click();

    // Verify that the quantity has decreased
    cy.get('.actions span').should('contain', '1');

    //click on remove button
    cy.get('.remove .outlined').click();

    //verify the cart is empty
    cy.get('.empty-cart.margin-top strong').should(
      'contain',
      'No item in the cart',
    );
  });
});
