const express = require("express");
const addTaskController = require("../../controllers/addTaskController");
const updateTaskController = require("../../controllers/updateTaskController");
const viewTaskController = require("../../controllers/viewTaskController");
const deleteController = require("../../controllers/deleteController");
const route = express.Router();

route.get("/viewtask", viewTaskController);

route.post("/addtask", addTaskController);

route.put("/updatetask/:id", updateTaskController);

route.delete("/deletetask/:id", deleteController);

module.exports = route;
