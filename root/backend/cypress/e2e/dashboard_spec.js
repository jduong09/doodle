describe('Dashboard', () => {
  it ('successfully loads', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Hello this is Dashboard.');
  });
});