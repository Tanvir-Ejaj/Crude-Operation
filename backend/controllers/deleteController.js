const Todo = require("../model/todoModel");

let deleteController = async (req, res) => {
  try {
    let deletedata = await Todo.findByIdAndDelete(req.params.id);
    res.send({ success: "Deleted" });
  } catch (error) {
    res.send({ error: "Wrong ID" });
  }
};

module.exports = deleteController;
