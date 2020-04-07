/// <reference types="Cypress" />

describe('My first test suite', function(){
    it('Does not do much', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) => {

        const vegText=$e1.find('h4.product-name').text()
        if(vegText.includes('Cashews'))
        {
            $e1.find('button').click()
        }

    })

    })
})