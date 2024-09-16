



import { userCredentials } from '../support/credentials'; 

describe('Carb Manager - Login and Add Food', () => {

  before(() => {
    
    cy.visit('/'); 
  });

  it('Should log in with valid credentials and land on the daily log page', () => {
    
    cy.get('#email').type(userCredentials.email); 
    cy.get('#password').type(userCredentials.password); 
    cy.get('#signin-submit-btn').click(); 

    cy.sleep(10000); 
    cy.url().should('include', '/daily-log'); // Verify URL contains "daily-log"
    cy.get('[data-cy=daily-log]').should('be.visible'); 
  });

  it('Should add "Egg" to the daily log', () => {
    // Click on the "+" button
    cy.get('.add-button').click();

    // Click on "Add Food" option
    cy.get('.submenu__btn').contains('Add Food').click();

    // Wait for the Food Finder dialog to appear
    cy.get('[data-test-cy="html-input-el-undefined"]').should('be.visible');

    // Search for "egg"
    cy.get('[data-test-cy="html-input-el-undefined"]').type('egg');
    cy.get('[data-test-cy="html-input-el-undefined"]').type('{enter}'); 
    cy.xpath('//div[contains(@class, "food-search-item__title") and contains(text(), "Egg")]')
    .click();
    cy.get('.food-details').should('be.visible');
    cy.get('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row')
      .contains('Add')
      .click();
    
    cy.get('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row span.block')
    .click();
    cy.get('.meal-foods__item[data-log-id="IVn3AmNzGIR3dD7DpGfi"] .food-name').should('contain', 'Egg');
  });
});
