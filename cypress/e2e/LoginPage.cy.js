import LoginPage from './PageObjects/LoginPage'
import AddToCartPage from './PageObjects/AddToCart'

describe('Test', ()=>{
    it('Test Login with valid credentials', ()=>{
        cy.visit("https://demoblaze.com")
        const loginPage = new LoginPage()
        loginPage.login()
        const addToCartPage = new AddToCartPage()
        addToCartPage.Add()

    })

})