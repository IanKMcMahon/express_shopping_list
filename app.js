const express = require("express");
const routes = require("./routes")

const app = express();

app.use(express.json());
app.use('/items', routes)

//////////////////////////////////////////


app.listen(3000, function () {
    console.log("Server is listening on port 3000");
  });
  
  module.exports = app;