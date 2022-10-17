Cypress.Commands.add('openContactPage', () => {
    cy.visit('http://localhost:8080/Contact.html', {
    })
})

Cypress.Commands.add('openPricingPage', () => {
    cy.visit('https://www.lodgify.com/pricing/', {
    })
})