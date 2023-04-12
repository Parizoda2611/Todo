const { Pool } = require('pg')
const { pool, pg } = require('../utils/pg')

const taskGet = async(req, res) => {
  const { todo_task } = req.body

  try {
    const tasks = await pg('select * from todotasks')
    res.status(200).json({message: "success", tasks})
  } catch (error) {
    console.log(error);
  }
}

const taskGetById = async(req, res) => {
  const idToDelete = req.params.id;

  try {
    const task = await pg('select * from todotasks where id=$1', idToDelete)
    res.status(200).json({message: "success", task})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {taskGet, taskGetById}