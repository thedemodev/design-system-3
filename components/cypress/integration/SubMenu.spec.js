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

  it("closes the menu on esc key", () => {
    cy.contains("Dashboard").click();
    cy.contains("Customers").type("{esc}");

    expect(cy.contains("Customers").should("not.exist"));
  });

  it("focuses the second sub menu item after opening and then pressing down", () => {
    cy.contains("Dashboard").click();

    expect(cy.contains("Customers")).to.exist;
    cy.focused().then($el => {
      expect($el).to.contain("Customers");
    });
    cy.contains("Customers").type("{downarrow}");
    cy.focused().then($el => {
      expect($el).to.contain("Invoices");
    });
  });

  it("focuses the last sub menu item after opening and then pressing up", () => {
    cy.contains("Dashboard").click();

    expect(cy.contains("Customers")).to.exist;
    cy.focused().then($el => {
      expect($el).to.contain("Customers");
    });
    cy.contains("Customers").type("{uparrow}");
    cy.focused().then($el => {
      expect($el).to.contain("Carriers");
    });
  });
});
