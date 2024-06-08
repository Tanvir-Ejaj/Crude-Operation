const Todo = require("../model/todoModel");

let viewTaskController = async (req, res) => {
  const viewTasks = await Todo.find();
  res.send(viewTasks);
};

module.exports = viewTaskController;
