import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const AuthorList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {author, setAuthor, removeFromDom} = props;
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            console.log(res.data);
            setAuthor(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <h2 className="authorRow">All Authors:</h2>
            <div >
                {
                    author.map((author, index)=>{
                    return <div className="authorRow" key={index}>
                        <Link className='largeText' to={`/author/${author._id}`}> {author.name}</Link>

                        <button className="btn btn-secondary" onClick={() => navigate(`/author/edit/${author._id}`)}>
                            Edit
                        </button>

                        <button className="btn btn-danger" onClick={(e)=>{deleteAuthor(author._id)}}>
                            Delete
                        </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AuthorList;