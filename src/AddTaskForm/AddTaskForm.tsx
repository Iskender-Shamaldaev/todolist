import React from 'react';

interface IPersonProps extends React.PropsWithChildren {

    onEnterMessage: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<IPersonProps> = props => {
    return (
        <div className="addForm">
                    <input className="input" type="text" onChange={props.onEnterMessage} />
                <button className="btn" >Add</button>
        </div>
    );
};

export default AddTaskForm;