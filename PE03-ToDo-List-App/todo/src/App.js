import React, { useState } from "react";
import "./index.css";

function ToDoListApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>ToDo List App</h2>
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
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListApp;
