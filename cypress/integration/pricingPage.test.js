import { pricing } from "../support/pageObjects/pricingPage";
import { faker } from "@faker-js/faker";
const testData = require("../fixtures/testData.json");
const rentals = require('../fixtures/rentals.json');

describe("Lodgify pricing page", () => {
  beforeEach("open application", () => {
    cy.openPricingPage();
  });

  it("verify Yearly plan", () => {
    pricing.setNumberOfRentals(testData.numberOfRentals);
    pricing.getStarterRentals(rentals.Yearly[50].USD);
    
  });
  it("verify that the change of currency properly changes the currency of the pricing options", () => {
    pricing.setNumberOfRentals(testData.numberOfRentals);
    pricing.selectCurrency('€ EUR');
    pricing.getStarterRentals(rentals.Yearly[50].EUR);
  })
});
  