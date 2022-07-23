import React, {useState} from 'react'
import styles from './Form.module.css'

const Form = (props) => {
    const {boxColors, setBoxColors} = props

    //Manage the state of the color that is input into the textbox.
    const [color, setColor] = useState("");

    const submitEvent = (event) => {
        event.preventDefault(); //prevents the standard refresh of page upon submit

        //Upon submit, we want to set the state of boxColors to the
        // current value PLUS the new value using spread.
        setBoxColors([...boxColors, color]);
        
        //Clears the text input after a user submits
        event.target.reset();
    }

    return (
        <div>
            <form onSubmit={ submitEvent }>
                <div className= {styles.formBar} >
                    <label htmlFor="color">Color: </label>
                    <input 
                        type="text" 
                        name="color"
                        onChange={ (e) => setColor(e.target.value) }
                    />
                    <button className = {styles.button}>Add</button>
                </div>
            </form>
        </div>
    )    
}
export default Form; 