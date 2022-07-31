import React from 'react'
import {useParams} from "react-router";

const ParamComponent = (props) => {
    const {word, color, backColor} = useParams();

    return (
        <div>

            {/* Conditional to check the Parameter - word or number */}
            {
                isNaN(word)?

                // If word is Not a Number, then display the Word messaging:
                <h1 style={
                    {color: color, backgroundColor: backColor}
                }>The word is: {word}</h1>
                :
                //If word is a Number, then display the Number messaging
                <h1>The number is: {word}</h1>
            }
        </div>  
    )
}

export default ParamComponent;