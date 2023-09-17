const { Router } = require("express");
const router = Router();
const { asyncHandler } = require("../middleware");
const person = require("../controller/person.controller");
router.get("/", asyncHandler(person.getAllPeople));
router.get("/:query", asyncHandler(person.getOnePerson));
router.post("/", asyncHandler(person.createPerson));
router.put("/:id", asyncHandler(person.updatePerson));
router.delete("/:id", asyncHandler(person.deletePerson));
module.exports = router;
/**
 * @swagger
 * model:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the person.
 *         name:
 *           type: string
 *           description: The name of the person.
 *         age:
 *           type: integer
 *           description: The age of the person.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the person.
 */

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Get a list of all people
 *     description: Retrieve a list of all people stored in the database.
 *     responses:
 *       200:
 *         description: A list of people.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/model/Person'
 *
 *   /api/:
 *   post:
 *     summary: Create a new person
 *     description: Create a new person with the provided details.
 *     requestBody:
 *       description: Person data to create.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the person (required).
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the person.
 *               age:
 *                 type: integer
 *                 description: The age of the person.
 *     responses:
 *       201:
 *         description: A new person has been created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/model/Person'
 * 
 * /api/{query}:
 *   get:
 *     summary: Get a person by name or ID
 *     description: Retrieve a person by providing their name or ID as a parameter.
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: The name or ID of the person to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested person.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/model/Person'
 *
 * /api/{id}:
 *   put:
 *     summary: Update an existing person
 *     description: Update an existing person by providing their ID in the URL and sending a JSON request body with the updated details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the person to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated person data.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/model/Person'
 *     responses:
 *       200:
 *         description: The person has been updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/model//Person'
 *
 *   delete:
 *     summary: Delete a person by ID
 *     description: Delete a person by providing their ID in the URL.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the person to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: The person has been deleted successfully.
 */
