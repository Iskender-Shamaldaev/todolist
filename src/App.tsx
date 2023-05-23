import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

const App = () => {
    const [messages, setMessages] = useState([
        {text: 'Leon',  id: 24345},
        {text: 'Frodo',  id: 3456},
        {text: 'Bilbo',  id: 4234},
        {text: 'Sam',  id: 5235},
    ]);


    return (
        <div className="App">
            <AddTaskForm/>
            <Task text={messages[0].text}/>
            <Task text={messages[1].text}/>
            <Task text={messages[2].text}/>
            <Task text={messages[3].text}/>
        </div>
    );
};

export default App;
