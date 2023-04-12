const { Router } = require('express')
const { taskAdd } = require('../controllers/todo.create')
const { deleteTask } = require('../controllers/todo.delete')
const { filterByDate, pagination } = require('../controllers/todo.filter')
const { taskGet, taskGetById } = require('../controllers/todo.get')
const { updateTask } = require('../controllers/todo.update')

const router = Router()
router.post('/add/task', taskAdd)
router.get('/get/task', taskGet)
router.get('/get/task/:id', taskGetById)
router.get('/get/pagination/:id', pagination,filterByDate)
router.put('/update/task/:id', updateTask)
router.delete('/delete/task/:id', deleteTask)

module.exports = router