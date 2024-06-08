const Todo = require("../model/todoModel");

let updateTaskController = async (req, res) => {
  try {
    let updatedata = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    updatedata.save();
    res.send({ success: "Updated" });
  } catch (error) {
    res.send({error: "Wrong ID"});
  }
};

module.exports = updateTaskController;

// if (existingTask.length > 0) {
//   async function updatedata() {
//     await Todo.updateOne({ name: name }, { description: description });
//   }
//   updatedata();
//   res.send({ success: "Updated" });
// } else {
//   res.send({ error: "Task Not Found" });
// }
