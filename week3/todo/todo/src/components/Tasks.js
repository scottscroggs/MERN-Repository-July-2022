import React, {useState} from 'react';

const Tasks = (props) => {
    const {taskList, setTaskList} = props
    
    const completedStyle = (markComplete) => {
        if (markComplete === true) {
            return "completed";
        } else {
            return "nonCompleted";
        }
    }

    //Function that will handle the change after the checkbox is clicked.
    const checkHandler = (task) => {
        task.markComplete = !task.markComplete;
        setTaskList([...taskList]);
    }

    const deleteButton = (id) => {
        // Calling the Setter method for the TaskList state.
        // Then we use the Filter. This will return TRUE if the parameter ID is NOT THE SAME as the Tasks's ID.
        // Then it adds those TRUE values to the updated TaskList we want to render, removing the one we want deleted.
        setTaskList(
            taskList.filter((task, index) => {
                return task.id !== id;
            })
            );
    }


    return (
        <div className = "task-section">
            {
                taskList.map((task, index) =>
                    <div className={completedStyle(task.markComplete)} key={task.id}>
                        {/* This line will render each To-Do, a checkbox, and a Delete button next to it */}
                            <input className="checkbox" type="checkbox" onChange={() => checkHandler(task)}></input>
                            {task.content}
                            <button className="btn btn-danger" onClick={() => deleteButton(task.id)}>Delete</button>{" "} 
                        
                        
                    </div>
                )
                }

        </div>
        )
    }
    export default Tasks;