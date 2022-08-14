import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const AuthorList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const navigate = useNavigate();
    const [author, setAuthor] = useState([]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId)); //We could also write this in our PersonList component
    }
    
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
            <Link to={'/new'}>New Author</Link> 

            <table className="table">
                <thead>
                    <tr>
                        <th className="largeText">Author:</th>
                        <th className="largeText">Available Actions:</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        author.map((author, index)=>{
                        return <tr className="authorRow" key={index}>
                            <td><Link className='largeText' to={`/author/${author._id}`}> {author.name}</Link></td>

                            <td>
                                <button className="btn btn-secondary" onClick={() => navigate(`/author/edit/${author._id}`)}>
                                    Edit
                                </button>

                                <button className="btn btn-danger" onClick={(e)=>{deleteAuthor(author._id)}}>
                                    Delete
                                </button>
                            </td>

                            </tr>                       
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default AuthorList;