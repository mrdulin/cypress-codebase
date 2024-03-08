import GraphQL from "./";

describe("66343298", () => {
  it("test market status", () => {
    const res = {
      json: cy
        .stub()
        .resolves({ data: { readMarketClosureStatus: { isClosed: true } } }),
    };
    cy.stub(window, "fetch").resolves(res);

    return GraphQL.getResponse(GraphQL.queries.readMarketClosureStatus).then(
      (data) => {
        // expect(data.readMarketClosureStatus.isClosed).to.be.true;
        cy.log("123");
        if (data.readMarketClosureStatus.isClosed) {
          cy.get('[data-cy="marketClose"] i').should(
            "have.class",
            "marketClose"
          );
        } else {
        }
      }
    );
  });
});
