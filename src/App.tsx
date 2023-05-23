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

    let messagesList: React.ReactNode | null = null;

    messagesList = messages.map((task, index) => {
        return (
            <Task
                key={messages[index].id}
                text={messages[index].text}
            >
            </Task>
        );
    });


    return (
        <div className="App">
            <AddTaskForm/>
            {messagesList}
        </div>
    );
};

export default App;
