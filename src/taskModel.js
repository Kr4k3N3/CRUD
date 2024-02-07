// taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
