describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shoud allow me to enter my current location', () => {
    cy.get('input#my-current-location')
      .should('have.attr', 'placeholder', 'Where are you right now?')
      .type('Berlin, Germany');
  });
});
