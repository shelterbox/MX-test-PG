/// <reference types="cypress" />
/// <reference path="./commands.d.ts" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Login to a given Mendix application
Cypress.Commands.add('login', (host, username, password) => {
  if (host) {
    // POST request Mendix XAS endpoint to login
    host = host.replace(/[\/]$/gm, '');
    cy.request({
      url: `${host}/xas/`,
      method: 'POST',
      body: JSON.stringify({
        action: 'login',
        params: {
          username: username,
          password: password,
        }
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000
    }).then((res) => {
      // Expect OK status
      cy.visit(host)
      // Else throw an error
      if (res.status !== 200) throw Error('Cannot login')
    })
  }
  else throw Error('Invalid host')
})

// Logout a given Mendix application
Cypress.Commands.add('logout', (host) => {
  if (host) {
    // POST request Mendix XAS endpoint to login
    cy.request({
      url: `${host}/xas/`,
      method: 'POST',
      body: JSON.stringify({
        action: 'logout',
        params: {}
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      // Expect OK status
      if (res.status !== 200) throw Error('Cannot logout')
    })
  }
  else throw Error('Invalid host')
})