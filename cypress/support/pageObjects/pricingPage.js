const rentals = require("../../fixtures/rentals.json");
  
export class PricingPage {
  numberOfRentalsBox = () => cy.get('#scroll-prop-plan');
  starterRentals = () => cy.get('.price-grid .plan-price');

  setNumberOfRentals = (number) => {
    this.numberOfRentalsBox().clear().type(number);
  };

  getStarterRentals = (rentals) => {
    this.starterRentals().each((listItem,index) => {
        const itemText = listItem.text().trim();
        expect(itemText).to.include(rentals[index]);
    });
  };

  selectCurrency = (currency) => {
    cy.get("select").select(currency);
  };

  
}

export const pricing = new PricingPage();
