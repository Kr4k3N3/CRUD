const express = require('express');
const taskController = require('./taskController');
const Task = require('./taskModel')
const router = express.Router();

router.post('/tasks', taskController.createTask);
// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // You're using Task here, but Task is not defined in this file
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a task
router.post('/', async (req, res) => {
  const { description } = req.body;
  try {
    const task = new Task({ description }); // Same issue here, Task is not defined
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/tasc', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
// Add more routes for updating and deleting tasks as needed

module.exports = router;
