import { restore, popover } from "__support__/e2e/cypress";

describe("issue 17011", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();
  });

  it("should allow searching tables in a specific database (metabase#17011)", () => {
    cy.visit("/question");
    cy.findByText("Custom question").click();

    popover().within(() => {
      cy.findByText("Sample Dataset").click();
      cy.findByPlaceholderText("Find...").type("Ord");
      cy.findByText("Saved question").should("not.exist");
      cy.findByText("Table in").should("not.exist");
      cy.findByText("Orders");
    });
  });
});
