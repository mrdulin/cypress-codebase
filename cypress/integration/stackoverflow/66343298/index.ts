class GraphQL {
  static queries = {
    readMarketClosureStatus:
      "{readMarketClosureStatus {closeTime openTime isClosed}}",
  };

  static getResponse(graphQLQuery) {
    const responseJsonOject = fetch("http://localhost:3000/trade", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: graphQLQuery }),
    })
      .then((r) => r.json())
      .then((data) => data.data);

    return responseJsonOject;
  }
}

export default GraphQL;
