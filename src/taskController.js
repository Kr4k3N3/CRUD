// Example in-memory storage for tasks (replace with MongoDB or a database of your choice)
let tasks = [];

// Create a new task
exports.createTask = async (req, res) => {
    try {
      const { description, dueDate, priority } = req.body;
      const newTask = new Task({ description, dueDate, priority });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Error creating task" });
    }
  };

  exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks" });
    }
  };
  exports.updateTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      // Update task fields
      task.description = req.body.description || task.description;
      // ... other fields
      await task.save();
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error updating task" });
    }
  };
  exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting task" });
    }
  };
