import React, {useState} from 'react';

const PersonCard = (props) => {
    // Deconstructing the props into variables
    const {firstName, lastName, age, hairColor} = props;

    //Creating a useState that stores the users current age.
    const [stateAge, setStateAge] = useState(age);

    //Function to increment the age stored in State.
    const handleClick = () => {
        setStateAge(
            stateAge + 1
        )
    }

    //The component being returned
    return( 
        <div>
            <h1 style={{color:"black"}}>{firstName} {lastName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>
        </div>

        
    );
}
export default PersonCard;