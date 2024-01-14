const express = require("express");
const middleware = require("./middleware")
const items = require('./fakeDb');
const morgan = require("morgan")

const routes = require("./routes")

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/items', routes)

//////////////////////////////////////////


app.listen(3000, function () {
    console.log("Server is listening on port 3000");
  });
  