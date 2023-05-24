import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import {nanoid} from 'nanoid';

const App = () => {
    const [messages, setMessages] = useState<{ text: string; id: string }[]>([]);


    const [currentTask, setCurrentTask] = useState(
        {text: '', id: ""}
    )


    const enterTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const messageCopy = {...currentTask};
        messageCopy.text = event.target.value;
        setCurrentTask(messageCopy);
    };


    const addMessage = () => {
        const messageCopy = {...currentTask};
        messageCopy.text = currentTask.text;
        messageCopy.id = currentTask.id;
        messageCopy.id = nanoid();
        setMessages([...messages, messageCopy]);
    };


    const removeMessage = (id: string) => {
        const messagesCopy = [...messages];
        const index = messages.findIndex(message => message.id === id);
        messagesCopy.splice(index, 1);
        setMessages(messagesCopy);
    };


    return (
        <div className="App">
            <AddTaskForm
                onEnterMessage={event => enterTask(event)}
                onButtonClick={() => addMessage()}
            />
            {messages.map((task) => (
                <Task
                    key={task.id}
                    text={task.text}
                    onRemoveMessage={() => removeMessage(task.id)}
                />
            ))}
        </div>
    );
};

export default App;
