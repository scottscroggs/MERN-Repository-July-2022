import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {product, setProduct} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            <h1>All Products:</h1>
            {
                product.map((product, index)=>{
                return <div key={index}>
                    <Link to={`/product/${product._id}`}> {product.title}</Link>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList;