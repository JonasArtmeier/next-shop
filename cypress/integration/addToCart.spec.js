/// <reference types="cypress" />

context('add Item to Cart', () => {
  it('adds item to cart', () => {
    cy.visit('http://localhost:3000/products/5');
    cy.get('button').click();
    cy.visit('http://localhost:3000/cart');
    cy.get('[data-cy="cart-item-name"]').contains('crazy-pink');
    cy.get('[data-cy="remove-button"]').click();
    cy.get();
  });
});
