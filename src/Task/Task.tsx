import React from 'react';

interface IMessageProps extends React.PropsWithChildren {
    text: string;
    onRemoveMessage: React.MouseEventHandler;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<IMessageProps> = props => {
    return (
        <div className="task-wrap">
            <div className="checkList">
                <div className="text">
                    <input type="checkbox" className="check" checked={props.checked} onChange={props.onChange}/>
                    <label htmlFor="all" className="text-label">{props.text}</label>
                </div>
                <button className="btn-remove" onClick={props.onRemoveMessage}></button>
            </div>
        </div>
    );
};

export default Task;