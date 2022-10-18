import { contact, ContactPage } from "../support/pageObjects/contactPage";
import { faker } from "@faker-js/faker";
const randomName = faker.random.word();
const randomEmail = faker.internet.email();
const randomComment = faker.lorem.text();
const errorMessage = require("../fixtures/errorMessages.json");
const testData = require("../fixtures/testData.json");

describe("Lodgify contact page: negative scenario", () => {
  beforeEach("open application", () => {
    cy.openContactPage();
  });

  it("verify Name field is mandatory", () => {
    contact.setPhone(testData.phoneCountry, testData.phoneNumber);
    contact.setEmail(randomEmail);
    contact.setGuestsQuantity(testData.numberOfGuests);
    contact.clickCalendar();
    contact.selectStartDate();
    contact.selectEndDate();
    contact.setComment(randomComment);
    contact.clickSendButton();
    contact.getErrorMessage(errorMessage.nameFieldError);
  });

  it("verify Email field is mandatory", () => {
    contact.setName(randomName);
    contact.setPhone(testData.phoneCountry,testData.phoneNumber);
    contact.setGuestsQuantity(testData.numberOfGuests);
    contact.clickCalendar();
    contact.selectStartDate();
    contact.selectEndDate();
    contact.setComment(randomComment);
    contact.clickSendButton();
    contact.getErrorMessage(errorMessage.emailFieldError);
  });

  it("verify Comment field is mandatory", () => {
    contact.setName(randomName);
    contact.setEmail(randomEmail);
    contact.setPhone(testData.phoneCountry, testData.phoneNumber);
    contact.setGuestsQuantity(testData.numberOfGuests);
    contact.clickCalendar();
    contact.selectStartDate();
    contact.selectEndDate();
    contact.clickSendButton();
    contact.getErrorMessage(errorMessage.commentFieldError);
  });

  it("verify Phone field is mandatory", () => {
    contact.setName(randomName);
    contact.setEmail(randomEmail);
    contact.setPhone(testData.phoneCountry, testData.phoneNumber);
    contact.setGuestsQuantity(testData.numberOfGuests);
    contact.setComment(randomComment);
    contact.clickCalendar();
    contact.selectStartDate();
    contact.selectEndDate();
    contact.clickSendButton();
    contact.getErrorMessage(errorMessage.phoneFieldError);
  });
});
describe("Lodgify contact page: positive scenario", () => {
  beforeEach("open application", () => {
    cy.openContactPage();
  });

  it("verify success message when all fields are filled in with valid data", () => {
    contact.setName(randomName);
    contact.setEmail(randomEmail);
    contact.setPhone(testData.phoneCountry, testData.phoneNumber);
    contact.setGuestsQuantity(testData.numberOfGuests);
    contact.setComment(randomComment);
    contact.clickCalendar();
    contact.selectStartDate();
    contact.selectEndDate();
    contact.clickSendButton();
    contact.getSuccessMessage(testData.successMessage);
  });
});
