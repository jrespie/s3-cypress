describe('template spec', () => {
  it('Headline should say Kitchen Stink', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('contain','Kitchen Stink')
  })
})