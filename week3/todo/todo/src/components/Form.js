import React, {useState} from 'react'

const Form = (props) => {
    //Manages the state of what the To-Do is from the textbox
    const [task, setTask] = useState("");

    //Deconstructing the Props of the TaskList.
    const {taskList, setTaskList} = props;

    const submitEvent = (event) => {
        //Prevents the standard refresh of page upon submit
        event.preventDefault(); 

        //Prevents a Task from being created if there's no value.
        if (task !== "") {
            //Create a copy of the current TaskList
            //Then adds a new instance of a Task to it.
            setTaskList([...taskList,
                {
                    content: task,
                    markComplete: false,
                    id: Math.floor(Math.random() * 100000000).toString(),
                }
            ]);

            //Clears the text input after a user submits
            setTask("");
            event.target.reset();
            }

    }

    return (
        <div className="form-section">
            <h1>Taskr</h1>
            <form className="form" onSubmit={ submitEvent }>
                <div className="flex">
                    <label htmlFor="task"></label>
                    <input
                        className="form-control" 
                        type="text" 
                        name="task"
                        placeholder="Enter a Task here...."
                        onChange={ (e) => setTask(e.target.value) }
                    />
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )

}

export default Form;
