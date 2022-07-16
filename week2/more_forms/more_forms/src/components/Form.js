import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    // Styling for form data at the bottom of page
    const formDataDivStyle = {
        textAlign: "left", 
        borderRadius: "5px",
        margin: "10px",
        border: "1px solid black",
        backgroundColor: "#f2f2f2",
        padding: "10px",
    }
    
      //Styling for each of the input rows in the form
    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
    }

    //Styling to make the labels bold and add some left margin
    const boldLabel = {
        fontWeight: "700",
        marginLeft: "20px",
    }

    return (
        <div >
            {/* This is for the form. Using onChange to capture what's in the field */}
            <form style={{ marginTop: "20px" }}>
                <div style ={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        name="firstName"
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
                <div style ={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </div>
                <div style ={inputDataDivStyle}>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div style ={inputDataDivStyle}>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
                <div style ={inputDataDivStyle}>
                    <label htmlFor="confirmPass">Confirm Password: </label>
                    <input 
                        type="password" 
                        name="confirmPass" 
                        onChange={ (e) => setConfirmPass(e.target.value) }
                    />
                </div>
            </form>
    
            {/* This section is to display the data that the user entered in the form. */}
            <div style ={formDataDivStyle}>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                    <label style={boldLabel}>First Name: </label>{ firstName }
                </p>
                <p>
                    <label style={boldLabel}>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label style={boldLabel}>Email: </label>{ email }
                </p>
                <p>
                    <label style={boldLabel}>Password: </label>{ password }
                </p>
                <p>
                    <label style={boldLabel}>Confirm Password: </label>{ confirmPass }
                </p>
            </div>
        </div>
    )
    }
    
    export default Form;
