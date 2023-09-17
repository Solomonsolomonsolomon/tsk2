require("dotenv").config();
const express = require("express");
const { globalErrorHandler } = require("./middleware");
const v1 = require("./versions/v1");
const index = require("./routes");
module.exports = (db) => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", v1);
  app.use(index);
  app.use(globalErrorHandler);
  return app;
};
