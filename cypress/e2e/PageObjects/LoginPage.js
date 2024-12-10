class LoginPage {
    elements = {

    }

    login(){
        cy.get('#login2').click()
        cy.wait(1500)
        cy.get('#loginusername').type('standard_user')
        cy.wait(1500)
        cy.get('#loginpassword').type('secret_sauce')
        cy.wait(1500)
        cy.get('button[onclick="logIn()"]').click({force: true})
        cy.get('#nameofuser').contains('Welcome').should('be.visible')
        cy.get('#logout2').should('be.visible')
    }
}

export default LoginPage