/// <reference types="cypress" />
import LoginFixures from "../fixtures/loginFixures" //LoginFixures é uma variavel criada de forma local aqui, poderia ser qualquer coisa
import HomeLocators from "../support/locators/homeLocators" //HomeLocators é uma variavel local criada aqui, podiamos usar qualquer coisa
import loginLocators from "../support/locators/loginLocators"

describe('loginTestes', () => {
    beforeEach(()=>{
        cy.visit('http://localhost/mantis/login_page.php')
    })
 it('login sucesso', () => {
  //     cy.fillUsername(LoginFixures.userName)
    //   cy.submitLogin()
      // cy.fillUserPassword(LoginFixures.password)
       //cy.submitLogin()
       cy.submitLoginFlows(LoginFixures.userName,LoginFixures.password)
       //cy.assertText(HomeLocators.messageValidation, LoginFixures.messageValidationLogin)
    })

    it('login falhaPassword',() =>{

        cy.fillUsername(LoginFixures.userName)
       cy.submitLogin()//clicar no botao login, subtmit login é a variavel que criamos para receber isso
        //cy.fillUserPassword('') //se a passowrd tiver vazia
        cy.submitLogin()
        cy.assertText(loginLocators.messageErrorLogin, LoginFixures.messageErrorPassword)
    })
  

})

