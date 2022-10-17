import { pricing } from "../support/pageObjects/pricingPage";
import { faker } from "@faker-js/faker";
const testData = require("../fixtures/testData.json");

describe("Lodgify pricing page", () => {
  beforeEach("open application", () => {
    cy.openPricingPage();
  });

  it("verify Yearly plan", () => {
    pricing.setNumberOfRentals(testData.numberOfRentals);
    pricing.getStarterRentals();
    
  });
});
  