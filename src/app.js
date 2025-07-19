const express = require("express")
const swaggerUi = require('swagger-ui-express');

const routes = require("./routes");
const handleErrors = require("./middlewares/handleErrors.js");
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
routes(app)
app.use(handleErrors)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app;
