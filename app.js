const express = require("express");
const middleware = require("./middleware")
const morgan = require("morgan")

const routes = require("routes/routes")

const app = express();