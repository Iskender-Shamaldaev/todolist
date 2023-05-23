import React from 'react';

interface IPersonProps extends React.PropsWithChildren {
    text: string;
}

const Task: React.FC<IPersonProps> = props => {
    return (
        <div className="task-wrap">
            <p className="text">{props.text}</p>
            <button className="btn-remove">Remove</button>
        </div>
    );
};

export default Task;