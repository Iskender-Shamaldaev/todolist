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

    const [currentTask, setCurrentTask] = useState([
    {text: '',  id: ""}
    ])

    const enterTask = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const messagesCopy = [...currentTask];
        const messageCopy = {...currentTask[index]};
        messageCopy.text = event.target.value;
        messagesCopy[index] = messageCopy;
        setCurrentTask(messagesCopy);
    };

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
            <AddTaskForm
                onEnterMessage= {event => enterTask(event, 0)}
            />
            {messagesList}
        </div>
    );
};

export default App;
