class AddToCart {
    elements = {

    }
    Add(){
        cy.get('[class="col-lg-4 col-md-6 mb-4"]').contains("Samsung galaxy s6").click()
        cy.get('[onclick="addToCart(1)"]').click()
        cy.get('[class="nav-link"]').contains('Cart').click()
        cy.get('#page-wrapper').contains('Samsung galaxy s6').should('be.visible')
    }
}
export default AddToCart