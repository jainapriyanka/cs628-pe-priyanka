import React, { useState } from "react";
import "./index.css";

function ToDoListApp() {
  // This state used to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // This state used to store the text input for a new task
  const [taskInput, setTaskInput] = useState("");

  // This addTask function used to add a new task to the list
  const addTask = () => {
    // It checks if the input is not empty
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // This deleteTask function used to remove a task from the list
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* Title */}
      <h2>ToDo List App</h2>

      {/* Input box and Add Task button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            {/* Adding delete button for each task */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListApp;
