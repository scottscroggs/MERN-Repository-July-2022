import React from 'react';

const PersonCard = (props) => {
    // Deconstructing the props into variables
    const {firstName, lastName, hairColor} = props;

    //The component being returned
    return( 
        <div>
            <h1 style={{color:"black"}}>{firstName} {lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}
export default PersonCard;