import React, { useState } from 'react';
import './todo.css';

export default function TODO() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [invalue, setValue] = useState('');

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

  function editTask(e) {
    e.preventDefault();
    let { id } = e.target;
    setValue(e.target.value);
  }

  let listOfTasks = taskList.map((element, index) => {
    return (
      <div key={index} className="tasks">
        <span id="index">{element}</span>
        <button className="item" id="index" onClick={deleteTask}>
          Delete
        </button>
        <button value={element} className="item" id="index" onClick={editTask}>
          Edit
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
