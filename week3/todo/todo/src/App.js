import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import Tasks from './components/Tasks'


function App() {

  //Defining our Array State variable, so that both Form and Tasks can access it.
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Form 
        taskList = {taskList}
        setTaskList = {setTaskList}
      />
      <Tasks 
        taskList = {taskList}
        setTaskList = {setTaskList}
      />
    </div>
  );
}

export default App;
