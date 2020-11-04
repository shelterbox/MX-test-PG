/// <reference types="cypress" />
// Declaration file for commands.js

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
    * Login to a Mendix application using XAS request
    * @see https://github.com/shelterbox/Mendix-app-testing
    * @example
    * cy.login('https://ops-test.shelterbox.org', 'MxAdmin', 'password')
    * // --- or ---
    * const host = Cypress.env('host')
    * const username = 'MxAdmin';
    * const password = Cypress.env('user')[username]
    * cy.login(host, username, password)
    */
    login(host: string, username: string, password): Chainable<Subject>

    /**
    * Logout of a Mendix application using XAS request
    * @see https://github.com/shelterbox/Mendix-app-testing
    * @example
    * cy.logout('https://ops-test.shelterbox.org')
    * // --- or ---
    * const host = Cypress.env('host')
    * cy.logout(host)
    */
    logout(host: string): Chainable<Subject>

    /**
    * Select a given option label on a select input
    * @see https://github.com/shelterbox/Mendix-app-testing
    * @example
    * cy.contains('Title')
    *   .parent()
    *   .find('select')
    *   .selectLabel('Mr')
    */
    selectLabel(label: string): Chainable<Subject>
  }
}