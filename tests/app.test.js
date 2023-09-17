const request = require("supertest");
const makeApp = require("./../app");
const database = require("./../model/database");
const app = makeApp(database);
describe("Testing if is valid endpoint", () => {
  it("should return a body with statusCode", async () => {
    const response = await request(app).get("/api");
    expect(response.body).toHaveProperty("status");
  });
});
