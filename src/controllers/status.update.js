const { pg } = require("../utils/pg");

const statusUpdateTask = async(req, res) => {
  try {
    const idToUpdate = req.params.id
    const { status } = req.body

    const updated = await pg(`UPDATE todotasks set todo_status=$1 where id=$2`, status, idToUpdate)
    res.status(200).json({message: "Task status updated!"})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {statusUpdateTask}