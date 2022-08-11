import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    
    // retrieve the current values for this product so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description  // this is the shortcut syntax for description: description
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <div className="formContainer">
                <form className="form" onSubmit={updateProduct}>
                    <p>
                        <label>Title:</label><br />
                        <input type="text" 
                        className="form-control"
                        name="title" 
                        value={title} 
                        onChange={(e) => { setTitle(e.target.value) }} />
                    </p>
                    <p>
                        <label>Price: </label><br />
                        <input type="text" 
                        className="form-control"
                        name="price"
                        value={price} 
                        onChange={(e) => { setPrice(e.target.value) }} />
                    </p>
                    <p>
                        <label>Description: </label><br />
                        <input type="text" 
                        className="form-control"
                        name="description"
                        value={description} 
                        onChange={(e) => { setDescription(e.target.value) }} />
                    </p>
                    <input className = "btn btn-primary btn-wide" type="submit" />
                </form>
            </div>
        </div>
    )
}
export default Update;

