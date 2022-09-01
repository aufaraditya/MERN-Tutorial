const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


//router.get('/', getGoals) #1
//router.post('/', setGoal) #2
//#1 and #2 are combined into this line of code
router.route('/').get(getGoals).post(setGoal)


//router.put('/:id',updateGoal) #3
//router.delete('/:id', deleteGoal) #4
//#3 and #4 are combined into this line of code
router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router