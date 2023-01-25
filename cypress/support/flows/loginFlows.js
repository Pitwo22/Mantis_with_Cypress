

import LoginLocators from "../locators/loginLocators";

Cypress.Commands.add("submitLoginFlows", (userName,password)=>{
    cy.get(LoginLocators.tfUsername).type(userName)
    cy.get(LoginLocators.btLogin).click()
    cy.get(LoginLocators.tfPassword).type(password)
    cy.get(LoginLocators.btLogin).click()

})