Cypress.Commands.add("assertText", (element, text)=>{
    cy.get(element).should("include.text",text)
})