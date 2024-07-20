// routes/expenseRoutes.js
const express = require('express');
const { addExpense, getExpenses, editExpense, deleteExpense } = require('../controllers/expenseController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// @route    POST api/expenses
// @desc     Add a new expense
// @access   Private
router.post('/', auth, addExpense);

// @route    GET api/expenses
// @desc     Get all expenses
// @access   Private
router.get('/', auth, getExpenses);

// @route    PUT api/expenses/:id
// @desc     Edit an expense
// @access   Private
router.put('/:id', auth, editExpense);

// @route    DELETE api/expenses/:id
// @desc     Delete an expense
// @access   Private
router.delete('/:id', auth, deleteExpense);

module.exports = router;
