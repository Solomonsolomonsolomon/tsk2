const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swaggerOptions"); // Import the swaggerOptions file

const app = express();

// Define the swagger specification using swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start your Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
