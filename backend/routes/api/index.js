const express = require("express");
const route = express.Router();
const authenticationRoute = require("./auth");
const todoRoute = require("./todo");

route.use("/auth", authenticationRoute);
route.use("/todo", todoRoute);

module.exports = route;
