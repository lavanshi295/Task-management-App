import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  // Initial list of tasks
  const initialTasks = [
    { id: 1, title: 'Task 1', description: 'First task', priority: 'high', completed: false },
  ];

  return {
    props: { initialTasks }, // Passed to the page component as props
  };
}

export default function Home({ initialTasks }) {
  // Manage state for tasks
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'low' });
  const [searchQuery, setSearchQuery] = useState('');

  // Load tasks from localStorage on first load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Persist tasks in localStorage when tasks are updated
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    const newId = tasks.length + 1;
    setTasks([...tasks, { ...newTask, id: newId, completed: false }]);
    setNewTask({ title: '', description: '', priority: 'low' });
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Sort tasks by priority
  const sortTasks = () => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const sortedTasks = [...tasks].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
    setTasks(sortedTasks);
  };

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Task Management App</h1>

      {/* Add New Task Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Sort Tasks Button */}
      <button onClick={sortTasks}>Sort Tasks by Priority</button>

      {/* Task List */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.priority}>
            <h3>{task.title} ({task.priority})</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
  /* Container for the entire app */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7fc;
  }

  div {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: #3a3d5a;
  }

  /* Form styling */
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    background-color: #f4f7fc;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  input, textarea, select {
    padding: 15px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    background-color: #e9eefb;
    color: #333;
    outline: none;
    transition: box-shadow 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button[type="submit"], button {
    padding: 12px 20px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #3a57e8;
    color: white;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover, button:hover {
    background-color: #2d45b9;
  }

  /* Task list */
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
    color: #333;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #555;
  }

  /* Priority badges */
  .priority-badge {
    font-size: 0.8rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    margin-bottom: 10px;
  }

  .high {
    background-color: #e63946;
  }

  .medium {
    background-color: #f4a261;
  }

  .low {
    background-color: #2a9d8f;
  }

  /* Task status and buttons */
  .task-actions {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 8px 15px;
    font-size: 0.9rem;
    margin-right: 10px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .delete-btn {
    background-color: #e63946;
  }

  .delete-btn:hover {
    background-color: #b52e34;
  }

  .completed-btn {
    background-color: #2a9d8f;
  }

  .completed-btn:hover {
    background-color: #217b6d;
  }

  /* Search bar */
  input[type="text"] {
    margin-bottom: 20px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    background-color: #e9eefb;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    div {
      padding: 15px;
    }

    h1 {
      font-size: 2rem;
    }

    button {
      padding: 8px 12px;
    }

    li {
      padding: 15px;
    }

    form {
      padding: 20px;
    }
  }
`}</style>
    </div>
  );
}
