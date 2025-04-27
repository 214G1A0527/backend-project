const express = require('express');
const router = express.Router();
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
  } = require('../controllers/taskController');
const { protect,admin } = require('../middleware/authMiddleware');

// All routes below require login (protect middleware)
// Create a new task
router.post('/', protect, createTask);

// Get all tasks for a user
router.get('/', protect, getTasks);

// Get a specific task by ID
router.get('/:id', protect,admin, getTaskById);

// Update a task by ID
router.put('/:id', protect, updateTask);

// Delete a task by ID
router.delete('/:id', protect, admin, deleteTask);

module.exports = router;
