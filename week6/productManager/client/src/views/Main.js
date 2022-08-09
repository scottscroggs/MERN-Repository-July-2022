import React, { useState } from 'react'
import axios from 'axios';

//Importing the components to be displayed in this view
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const [product, setProduct] = useState([]);

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}

export default Main;