describe("NavBar Menu", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("http://localhost:8080/iframe.html?selectedKind=NavBar&selectedStory=NavBar");
  });

  it("opens the menu on click", () => {
    cy.contains("Dashboard").click();

    expect(cy.contains("Customers")).to.exist;
  });

  it("focuses the first sub menu item when the menu opens", () => {
    cy.contains("Dashboard").click();

    expect(cy.contains("Customers")).to.exist;
    cy.focused().then($el => {
      expect($el).to.contain("Customers");
    });
  });
});
