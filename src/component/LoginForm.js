import React from 'react';
import '../LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/signup");
    }
    return (
        <div>
            <form>
                <h1> Login </h1>
                <label>Username: </label>
                <input id="username" type="text" placeholder="Enter your username" required/> <br />
                <label>Password: </label>
                <input id="password" type="password" placeholder="Enter your password" required/> <br />
                <button type="submit" >Login</button> <br />
                <button type="button" onClick = {handleButtonClick}>Switch to Signup</button>
            </form>
        </div>
    );
}

export default LoginForm;