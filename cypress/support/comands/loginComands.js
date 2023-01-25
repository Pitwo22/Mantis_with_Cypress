import LoginLocators from "../locators/loginLocators" //criamos uma classe local com o nome LoginLocators que vai receber o destino

Cypress.Commands.add("fillUsername", (userName) => {
    cy.get(LoginLocators.tfUsername).type(userName)
})

Cypress.Commands.add("submitLogin", (userName) => { // quando for clicar no botao de login 
    cy.get(LoginLocators.btLogin).click()
})

Cypress.Commands.add("fillUserPassword", (userPassoword) =>{

    cy.get(LoginLocators.tfPassword).type(userPassoword)
})

//tf.Password = ao campo de informar a senha