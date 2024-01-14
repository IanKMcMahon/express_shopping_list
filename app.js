const express = require("express");
const middleware = require("./middleware")
const morgan = require("morgan")

const routes = require("routes/routes")

const app = express();

app.use(express.json());
app.use(morgan('dev'));







app.listen(3000, function () {
    console.log("Server is listening on port 3000");
  });
  