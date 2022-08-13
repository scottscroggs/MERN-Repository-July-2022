import React, { useState } from 'react'
import axios from 'axios';

//Importing the components to be displayed in this view
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = (props) => {

    const [author, setAuthor] = useState([]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId)); //We could also write this in our PersonList component
    }

    return (
        <div>
            <AuthorForm author={author} setAuthor={setAuthor} />
            <hr/>
            <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;