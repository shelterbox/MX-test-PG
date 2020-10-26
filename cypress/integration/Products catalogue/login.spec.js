/// <reference types="cypress" />
/// <reference path="../../support/index.d.ts" />

context('Check application login', () => {
  const host = 'http://localhost:8088/'
  const user = 'MxAdmin'
  const password = Cypress.env('user')[user]

  // Login
  it('Login', () => {
    cy.login(host, user, password)
  })
});
