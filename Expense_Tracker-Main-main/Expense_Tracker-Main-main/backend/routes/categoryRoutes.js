// routes/categoryRoutes.js
const express = require('express');
const { addCategory, getCategories } = require('../controllers/categoryController');
const router = express.Router();

// @route    POST api/categories
// @desc     Add a new category
// @access   Public
router.post('/', addCategory);

// @route    GET api/categories
// @desc     Get all categories
// @access   Public
router.get('/', getCategories);

module.exports = router;
