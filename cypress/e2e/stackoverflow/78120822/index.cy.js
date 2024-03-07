/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('cypress/e2e/stackoverflow/78120822/index.html');
});
describe('78120822', () => {
  it('should pass', () => {
    cy.get('#id_update_freq').select('');
    cy.get('#id_update_freq').should('have.value', '');
  });
});
