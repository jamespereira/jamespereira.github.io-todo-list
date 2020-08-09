import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const tasks = props.tasks.map((task, index) => {
        return <Todo content={task} key={index} id={index} onDelete={props.onDelete}/>
    })

    return (
        <div className="list-wrapper">
            {tasks}
        </div>
    );
};

export default TodoList;