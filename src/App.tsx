import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import {nanoid} from 'nanoid';

interface TaskItem {
    text: string;
    id: string;
    checked: boolean;
}

const App = () => {
    const [messages, setMessages] = useState<TaskItem[]>([
        {text: 'Video Games', id: '123', checked: false},
        {text: 'Read Books', id: '456', checked: false},
        {text: 'Watch films', id: '789', checked: false},
    ]);

    const [currentTask, setCurrentTask] = useState({text: '', id: ''});

    const enterTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const messageCopy = {...currentTask};
        messageCopy.text = event.target.value;
        setCurrentTask(messageCopy);
    };

    const addMessage = () => {
        const messageCopy = {...currentTask, id: nanoid(), checked: false};
        setMessages([...messages, messageCopy]);
    };

    const removeMessage = (id: string) => {
        const messagesCopy = [...messages];
        const index = messages.findIndex(message => message.id === id);
        messagesCopy.splice(index, 1);
        setMessages(messagesCopy);
    };

    const changeCheckbox = (id: string) => {
        const messagesCopy = [...messages];
        const index = messagesCopy.findIndex((message) => message.id === id);
        messagesCopy[index].checked = !messagesCopy[index].checked;
        setMessages(messagesCopy);
    };

    return (
        <div className="App">
            <AddTaskForm onEnterMessage={enterTask} onButtonClick={addMessage}/>
            {messages.map((task) => (
                <Task
                    key={task.id}
                    text={task.text}
                    onRemoveMessage={() => removeMessage(task.id)}
                    checked={task.checked}
                    onChange={() => changeCheckbox(task.id)}
                />
            ))}
        </div>
    );
};

export default App;

