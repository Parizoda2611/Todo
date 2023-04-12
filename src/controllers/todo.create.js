const { Pool } = require('pg')
const { pool } = require('../utils/pg')
const Joi = require('joi')

const taskAdd = async(req, res) => {
  const { todo_task } = req.body
  try {
    const schema = Joi.object({
      todo_task: Joi.string().required()
    })
  
    const { error } = schema.validate({todo_task})
    if(error) return res.status(400).json({message: error.message})

    const result = pool.query(
      'INSERT INTO todotasks(todo_task)values($1)',
      [todo_task]
    )
    res.status(201).json({message: 'Your task created successfully!'})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {taskAdd}