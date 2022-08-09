import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //Deconstructing the Props - this is needed so that when a new record is added, the state can be updated to display immediately.
    const {product, setProduct} = props;

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description  // this is the shortcut syntax for description: description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);

                //Updating the Lifted State of our records array to include the current value in state, plus the newly created object from our POST request.
                setProduct([...product, res.data]);

                e.target.reset();
            })
            .catch(err=>console.log(err))
        
    }
    
    return (
        <div>
            <h1>Product Manager:</h1>
            <div className="formContainer">
                
                <form className="form" onSubmit={onSubmitHandler}>
                    <p>
                        <label>Title</label><br/>
                            {/* When the user types in this input, our onChange synthetic event 
                            runs this arrow function, setting that event's target's (input) 
                            value (what's typed into the input) to our updated state   */}
                        <input className="form-control" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                    </p>
                    <p>
                        <label>Price</label><br/>
                        <input className="form-control" type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input className="form-control" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                    </p>
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default ProductForm;

