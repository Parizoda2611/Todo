const { Pool } = require('pg')
const { pool, pg } = require('../utils/pg')

const deleteTask = async(req, res) => {
  const idToDelete = req.params.id;
  try {
    const tasks = await pg('DELETE FROM todotasks WHERE id = $1', idToDelete)
    res.status(200).json({message: "Your task deleted"})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {deleteTask}





