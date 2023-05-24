import React from 'react';

interface IMessageProps extends React.PropsWithChildren {
    text: string;
    onRemoveMessage: React.MouseEventHandler;
}

const Task: React.FC<IMessageProps> = props => {
    return (
        <div className="task-wrap">
            <p className="text">{props.text}</p>
            <button className="btn-remove" onClick={props.onRemoveMessage}></button>
        </div>
    );
};

export default Task;