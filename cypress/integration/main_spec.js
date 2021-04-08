describe("Sample test for translation purposes", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("t() returns plain text string", () => {
    cy.findByText(
      "Hi this is a test component. You should see a translated form below. This particular paragraph is NOT translated"
    );

    cy.findByRole("button", {
      name: /submit/i,
    }).click();

    cy.url("/account");
  });
});
