import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {product, setProduct, removeFromDom} = props;
    const navigate = useNavigate();
    
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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2 className="productRow">All Products:</h2>
            <div >
                {
                    product.map((product, index)=>{
                    return <div className="productRow" key={index}>
                        <Link className='largeText' to={`/product/${product._id}`}> {product.title}</Link>

                        <button className="btn btn-secondary" onClick={() => navigate(`/product/edit/${product._id}`)}>
                            Edit
                        </button>

                        <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductList;