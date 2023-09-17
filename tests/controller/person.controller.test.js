const { CustomError } = require("../../middleware");
const db = require("./../../model/database");
const request = require("supertest");
const MakeApp = require("./../../app");

const app = MakeApp(db);
const PersonController = require("./../../controller/person.controller");
jest.mock("../../model/database.js");
describe("PersonController", () => {
  let controller;
  beforeEach(() => {
    controller = PersonController;
  });


    it("should throw an error if 'name' is not provided", async () => {
      const req = {
        body: {},
      };
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };

      try {
        await controller.createPerson(req, res);
        // If the function does not throw an error, fail the test
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe("name is required");
        expect(error.status).toBe(400);
      }
    });
  });

