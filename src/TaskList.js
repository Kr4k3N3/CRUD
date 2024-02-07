const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
            alert('Failed to load tasks. Please try again later.');
        }
    };

    fetchTasks();
}, []);

  return (
    <div>
      {tasks.map(task => (
        <Task key={task._id} {...task} />
      ))}
    </div>
  );
};
