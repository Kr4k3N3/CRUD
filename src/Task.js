const Task = ({ id, description, dueDate, priority, onTaskUpdated, onTaskDeleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);
    // Add state for other editable fields like dueDate and priority
  
    const handleUpdate = async () => {
      try {
        // Update logic
        setIsEditing(false);
        onTaskUpdated(id, editedDescription /*, other fields*/);
      } catch (error) {
        // Handle update error
      }
    };
  
    const handleDelete = async () => {
      try {
        // Delete logic
        onTaskDeleted(id);
      } catch (error) {
        // Handle delete error
      }
    };
  
    if (isEditing) {
      return (
        <div>
          <input value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          {/* Add inputs for dueDate, priority */}
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      );
    }
  
    return (
      <div>
        <p>Description: {description}</p>
        <p>Due Date: {dueDate}</p>
        <p>Priority: {priority}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  