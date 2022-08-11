import React, { useState } from 'react';
import './todo.css';

export default function TODO() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function updateTask(e) {
    e.preventDefault();
    let { value } = e.target;
    setTask(value);
  }
  function getTasks(e) {
    e.preventDefault();
    let array = [task, ...taskList];
    setTaskList(array);
  }

  function deleteTask(e) {
    e.preventDefault();
    let { id } = e.target;
    taskList.splice(id, 1);
    let array = [...taskList];
    setTaskList(array);
  }

  let listOfTasks = taskList.map((element, index) => {
    return (
      <div key={index} className="tasks">
        <span>{element}</span>
        <button id="item" id="index" onClick={deleteTask}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="inputContainer">
        <input type="text" id="input" onChange={updateTask} />
        <button id="Add" onClick={getTasks}>
          Add
        </button>
      </div>
      <div className="display">{listOfTasks}</div>
    </div>
  );
}
