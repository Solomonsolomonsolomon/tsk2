const swaggerJsdoc = require("swagger-jsdoc");
const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    swagger: "2.0",
    info: {
      title: "Person api",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = options;
