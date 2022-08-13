import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


const AuthorUpdate = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [name, setName] = useState(""); 

    const navigate = useNavigate();
    
    // retrieve the current values for this record so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err));
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name,    // this is shortcut syntax for name: name,
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <div className="formContainer">
                <form className="form" onSubmit={updateAuthor}>
                    <p>
                        <label>Author Name:</label><br />
                        <input type="text" 
                        className="form-control"
                        name="name" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <input className = "btn btn-primary btn-wide" type="submit" />
                </form>
            </div>
        </div>
    )
}
export default AuthorUpdate;

