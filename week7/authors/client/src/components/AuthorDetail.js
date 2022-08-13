import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const AuthorDetail = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams();
    const navigate = useNavigate(); 
// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
        })
            .catch( err => console.log(err) )
    }, [id])

    const deleteAuthor = () => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="authorContainer">
            <div className="author">
                <h2>Author:</h2><br></br>
                <p><span className="bold">Name: </span>{author.name}</p>
                <br></br>
                <div><button className="btn btn-danger" onClick={deleteAuthor}>Delete</button></div>
                <br></br>
                <Link to={"/"}> Go Back</Link>
            </div>
        </div>
    )
}
export default AuthorDetail;

