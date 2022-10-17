const rentals = require("../../fixtures/rentals.json");
  
export class PricingPage {
  numberOfRentalsBox = () => cy.get('#scroll-prop-plan');
  starterRentals = () => cy.get('.price-grid .plan-price');

  setNumberOfRentals = (number) => {
    this.numberOfRentalsBox().clear().type(number);
  };

  getStarterRentals = () => {
    this.starterRentals().each((listItem,index) => {
        const itemText = listItem.text().trim();
        expect(itemText).to.include(rentals.Yearly[50].USD[index]);
    });
  };

  
}

export const pricing = new PricingPage();
