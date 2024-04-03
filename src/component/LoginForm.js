import React from 'react';
import '../LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/signup");
    }

    function loginValidate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (!username || !password) {
            showMessage("All fields are required");
            return false;
        }

        showMessage("User Login successful!");
        return true;
    }

    function showMessage(message) {
        var messageBox = document.getElementById("message-signup"); // Updated to target the correct element
        messageBox.innerHTML = message.replace(/\n/g, "<br>");
    }

    return (
        <div>
            <p id="message-signup"></p>
            <form>
                <h1> Login </h1>
                <label>Username: </label>
                <input id="username" type="text" placeholder="Enter your username" required/> <br />
                <label>Password: </label>
                <input id="password" type="password" placeholder="Enter your password" required/> <br />
                <button type="button" onClick={loginValidate}>Login</button> <br />
                <button type="button" onClick = {handleButtonClick}>Switch to Signup</button>
            </form>
        </div>
    );
}

export default LoginForm;