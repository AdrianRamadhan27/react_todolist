import React, { useState } from 'react';
import { FaPlusCircle, FaSave, FaPencilAlt, FaTrash } from 'react-icons/fa';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([{ text: newTask, completed: false, isEditing: false }, ...tasks]);
      setNewTask('');
    }
  };


  const toggleTask = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map((task, idx) => {
        if (idx === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return sortTasks(updatedTasks);
    });
  };

  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => a.completed - b.completed);
  };

  const editTask = (index) => {
    setTasks(prevTasks => 
      prevTasks.map((task, idx) => 
        idx === index ? { ...task, isEditing: true } : task
      )
    );
  };

  const saveTask = (index, newText) => {
    setTasks(prevTasks => 
      prevTasks.map((task, idx) => 
        idx === index ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="container">
      <h2>To-Do List <span className="task-indicator">({completedCount}/{tasks.length} Done)</span></h2>
      <div className="input-container">
        <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    addTask();
                  }
              }}
            placeholder="Tambah Item Baru"
        />
        <FaPlusCircle 
            className="add-button"
            onClick={addTask}
        />
      </div>
      

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task.isEditing ? (
              <input
                type="text"
                defaultValue={task.text}
                className="edit-input"
                onBlur={(e) => saveTask(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    saveTask(index, e.target.value);
                  }
                }}
              />
            ) : (
              <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
            )}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.isEditing ? (
              <FaSave
                className="save-button"
                onClick={() => saveTask(index, task.text)}
              />
            ) : (
              <FaPencilAlt
                className="edit-button"
                onClick={() => editTask(index)}
              />
            )}
            <FaTrash
              className="delete-button"
              onClick={() => deleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
