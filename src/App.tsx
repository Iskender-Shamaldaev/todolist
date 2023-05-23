import React from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

const App = () => (
    <div className="App">
      <AddTaskForm/>
      <Task/>
    </div>
);

export default App;
