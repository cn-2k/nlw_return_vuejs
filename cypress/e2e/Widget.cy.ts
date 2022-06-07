const APP_URL = process.env.APP_URL || "http://localhost:3000";

describe("Widget", () => {
  it("shoud open popover when widget is clicked", () => {
    cy.visit(APP_URL);

    cy.get("#widget-button").click();

    cy.get("#widget-popover");
  });
});
