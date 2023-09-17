/**
 * @swagger
 * /:
 *   get:
 *     summary: Get the index route
 *     description: Retrieve the index route of your application.
 *     responses:
 *       200:
 *         description: The index route has been accessed successfully.
 *
 * /health:
 *   get:
 *     summary: Check the health of the application
 *     description: Check the health status of your application.
 *     responses:
 *       200:
 *         description: The application is healthy.
 *
 * /tests:
 *   get:
 *     summary: Run tests
 *     description: Run tests for your application.
 *     responses:
 *       200:
 *         description: Tests have been executed successfully.
 */
const { Router } = require("express");
const router = Router();
const { asyncHandler } = require("../middleware");
const index = require("./../controller");
router.get("/", asyncHandler(index.getIndexRoute));
router.get("/health", asyncHandler(index.getHealthRoute));
router.get("/tests", asyncHandler(index.runTests));
router.use(index.use404Route);
module.exports = router;
