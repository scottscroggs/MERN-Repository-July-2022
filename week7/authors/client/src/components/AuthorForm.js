import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const AuthorForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

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
                navigate('/');
            })
            .catch((err)=> {
                console.log(err); 
                setErrors(err.response.data.errors);
            });
    }
    
    return (
        <div>
            <Link to={"/"}> Home</Link><br></br><br></br>
            <p>Add an Author:</p>
            <div className="formContainer">
                <form className="form" onSubmit={onSubmitHandler}>
                    <p>
                        <label>Name:</label><br/>
                            {/* When the user types in this input, our onChange synthetic event 
                            runs this arrow function, setting that event's target's (input) 
                            value (what's typed into the input) to our updated state   */}
                        <input className="form-control" type="text" onChange = {(e)=>setName(e.target.value)}/>
                        {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                    </p>
                    <input className="btn btn-primary btn-wide" type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default AuthorForm;

