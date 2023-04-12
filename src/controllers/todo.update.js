const { pg } = require("../utils/pg");

const updateTask = async(req, res) => {
  try {
    const idToUpdate = req.params.id
    const { newTask } = req.body

    const updated = await pg(`UPDATE todotasks set todo_task=$1 where id=$2`, newTask, idToUpdate)
    res.status(200).json({message: "Task Updated!"})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {updateTask}