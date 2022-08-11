import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate(); 
// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
        })
            .catch( err => console.log(err) )
    }, [id])

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="productContainer">
            <div className="product">
                <h2>Product:</h2><br></br>
                <p><span className="bold">Title: </span>{product.title}</p>
                <p><span className="bold">Description: </span>{product.description}</p>
                <p><span className="bold">Price: </span>${product.price}</p>
                <br></br>
                <div><button className="btn btn-danger" onClick={deleteProduct}>Delete</button></div>
                <br></br>
                <Link to={"/"}> Go Back</Link>
            </div>
        </div>
    )
}
export default Detail;

