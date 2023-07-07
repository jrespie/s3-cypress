describe('template spec', () => {
  it('Headline should say Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('contain','Kitchen Sink')
  })
})