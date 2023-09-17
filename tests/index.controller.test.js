const Index = require("../controller/"); // Import your Index class

describe("Index Class", () => {
  let index;

  beforeAll(() => {
    index = Index;
  });

  it("should return a welcome message for getIndexRoute", () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    index.getIndexRoute(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(
      "Welcome to my api 🎉🎉✨ \n if you're lost.. \n visit \n /health for server health \n  /api to perform crud operations "
    );
  });

  it("should return a health message for getHealthRoute", () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    index.getHealthRoute(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("server up and running...👋");
  });

  it("should return a 404 message for use404Route", () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    index.use404Route(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(
      "you've stumbled too far,Route not found \n if you're lost.. \n visit \n /health for server health \n  /api to perform crud operations"
    );
  });
});
