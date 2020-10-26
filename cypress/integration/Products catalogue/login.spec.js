/// <reference types="cypress" />
/// <reference path="../../support/index.d.ts" />

context('Check application login', () => {
  /**
   * Login to application using...
   * @example cy.login(host, user, password)
   * Documentation and original template can be found at...
   * @see https://github.com/shelterbox/Mendix-app-testing-template
   */
  // const host = Cypress.env('host')
  const host = 'http://localhost:8088/'
  const user = 'MxAdmin'
  const password = Cypress.env('user')[user]

  // Login
  it('Login', () => {
    cy.login(host, user, password)
  })
});
