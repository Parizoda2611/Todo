const { pg } = require("../utils/pg");

const pagination = async(req, res) => {
  const id = req.params.id
  try {
    const result = await pg('select * from todotasks offset $1 limit 10', id)
    res.status(200).json({message: "Success", result})
  } catch (error) {
    console.log(error);
  }
}

const filterByDate = async(req, res) => {
  const idToPagination = req.params.id
  const {from, to} = req.body
  try {
    const result = await pg('select * from todotasks where id=$1 todo_created_at between $2 and $3', idToPagination, from, to)
    res.status(200).json({message: "Success", result})
  } catch (error) {
    console.log(error);
  }
}

module.exports = {filterByDate, pagination}
