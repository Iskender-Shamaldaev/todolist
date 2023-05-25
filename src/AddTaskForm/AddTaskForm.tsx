import React from 'react';

interface IMessageProps extends React.PropsWithChildren {

    onEnterMessage: React.ChangeEventHandler<HTMLInputElement>;
    onButtonClick: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IMessageProps> = props => {
    return (
        <div className="addForm">
            <input className="input" type="text" onChange={props.onEnterMessage}/>
            <button className="btn" onClick={props.onButtonClick}>Add</button>
        </div>
    );
};


export default AddTaskForm;