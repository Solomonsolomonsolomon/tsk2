const { Router } = require("express");
const personRouter = require("../routes/person.routes");
const v1 = Router();
v1.use(personRouter);
module.exports = v1;
