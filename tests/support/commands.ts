/// <reference types="cypress" />

// Create custom commands
Cypress.Commands.add(
  'dataCy',
  // @ts-ignore
  (selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(`[data-cy=${selector}]`)
  },
)
// Declare types
declare namespace Cypress {
  interface Chainable {
    dataCy(value: string): Chainable<Element>
  }
}
