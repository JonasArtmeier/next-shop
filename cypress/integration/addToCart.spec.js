/// <reference types="cypress" />

context('add Item to Cart', () => {
  it(() => {
    cy.visit('http://localhost:3000/products/5')
  })
  