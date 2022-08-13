import React, { useState } from 'react'
import axios from 'axios';
const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 

    //Deconstructing the Props - this is needed so that when a new record is added, the state can be updated to display immediately.
    const {author, setAuthor} = props;

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new record
        axios.post('http://localhost:8000/api/author', {
            name,    // this is shortcut syntax for name: name,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                //Updating the Lifted State of our records array to include the current value in state, plus the newly created object from our POST request.
                setAuthor([...author, res.data]);

                e.target.reset();
            })
            .catch(err=>console.log(err))
        
    }
    
    return (
        <div>
            <h1>Favorite Authors:</h1>
            <div className="formContainer">
                
                <form className="form" onSubmit={onSubmitHandler}>
                    <p>
                        <label>Name:</label><br/>
                            {/* When the user types in this input, our onChange synthetic event 
                            runs this arrow function, setting that event's target's (input) 
                            value (what's typed into the input) to our updated state   */}
                        <input className="form-control" type="text" onChange = {(e)=>setName(e.target.value)}/>
                    </p>
                    <input className="btn btn-primary btn-wide" type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default AuthorForm;

