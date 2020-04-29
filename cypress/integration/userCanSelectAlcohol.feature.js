describe("User can search for alcohol", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/ingredients",
      response: "fixture:ingredients_response.json"
    });

    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/cocktails**",
      response: "fixture:cocktail_list_response.json"
    });

    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/cocktails/12402",
      response: "fixture:specific_cocktail_response.json"
    });

    cy.route({
      method: "GET",
      url: "https://grog-bot.herokuapp.com/api/alcohols?country=Sverige**",
      response: "fixture:alcohol_list_response.json"
    });

    cy.visit("/");
  });

  it("user can see list of Swedish alcohols", () => {
    cy.get("#ingredients_index").select("Orange");
    cy.get("button")
      .contains("Submit")
      .click();
    cy.get("#cocktail_list").should("contain", "Tom Collins");
    cy.get(".card")
      .contains("Tom Collins")
      .parent()
      .within(() => {
        cy.get("button")
          .contains("View drink details")
          .click();
      });
    cy.get(".content").within(() => {
      cy.get("div").contains("Tom Collins");
      cy.get("div").contains("Ordinary Drink");
      cy.get("div").contains("Gin 2 oz");
      cy.get("p").contains(
        "Instructions: In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar."
      );
      cy.get("p").contains("Glass: Collins glass");
    });

    cy.get("#alcohol_selector").select("Dark Rum");
    cy.get("button")
      .contains("Search")
      .click();
    cy.get("#alcohol_list").should("contain", "A-Bay Spirit");
  });
});
