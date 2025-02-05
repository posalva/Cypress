describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.facebook.com')
      cy.get('.ytSearchboxComponentInput').click().type('Type beat Japa')
      cy.get('.ytSearchboxComponentSearchButton').click()
      cy.contains('{FREE} Type Beat Japa').click()
      //newbranchtest
  })
})