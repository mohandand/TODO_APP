import React, { useState } from 'react';
import './todo.css';

export default function TODO() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [invalue, setValue] = useState('');
  const [readOnly, setReadOnly] = useState(true);
  const [buttonName, setButtonName] = useState('EDIT');

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
    if (e.target.value == 'EDIT') {
      setReadOnly(false);
      setButtonName('SAVE');
    } else {
      let { id } = e.target;
      taskList[id] = e.target.value;
      let array = [...taskList];
    setTaskList(array);
      setReadOnly(true);
      setButtonName('EDIT');
    }
  }

  let listOfTasks = taskList.map((element, index) => {
    return (
      <div key={index} className="tasks">
        <input id="index" defaultValue={element} readOnly={readOnly} />
        <button className="item" id="index" onClick={deleteTask}>
          DELETE
        </button>
        <button
          value={buttonName}
          className="item"
          id="index"
          onClick={editTask}
        >
          {buttonName}
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
