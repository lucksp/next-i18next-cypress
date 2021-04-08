describe("Sample test for translation purposes", () => {
  beforeEach(() => {
    cy.visit("/account");
  });
  it("t() returns plain text string for accounts", () => {
    cy.findByText("The basics of your account.");

    cy.findByRole("button", {
      name: /go back/i,
    }).click();

    cy.url("/");
  });
});
