import React from 'react'
import Task from './Task';

const Tasks = (props) => {
    return (
        <>
          {props.tasks.map((task) => (
              <Task key = {task.id} task = {task} 
              delete = {props.onDelete}
              onToggle = {props.onToggle} />
          ))}
        </>
    )
}

export default Tasks;
