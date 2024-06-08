const Todo = require("../model/todoModel");

let addTaskController = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.send({ error: "Please Fill All Inputs" });
  }

  if (description && description.length > 10) {
    return res.send({ error: "Please make a meaningful Description" });
  }

  let existingTask = await Todo.find({ name: name });

  if (existingTask.length > 0) {
    return res.send({ error: "Task Already Exist" });
  } else {
    let task = new Todo({
      name: name,
      description: description,
    });
    task.save();
    res.send({
      success: "Added Successfully.",
      task,
    });
  }
};

module.exports = addTaskController;
