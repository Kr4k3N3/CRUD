import React, { useState } from 'react';

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation checks
  if (!description || !dueDate) {
      alert('Please fill in all fields');
      return;
  }

  try {
      // Construct the task object
      const newTask = { description, dueDate, priority }; // Add other fields as necessary

      // Send a POST request to the backend
      await axios.post('/api/tasks', newTask);

      // Handle success (e.g., clear form, show success message, refresh task list)
      alert('Task added successfully');

      // Optionally, reset form fields or redirect the user
  } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create Task</button>
    </form>
  );


export default TaskCreate;
