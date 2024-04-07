import React, {createContext, useContext, useState} from 'react';
import '../LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/signup");
    }

    function submitData(username, password) {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': username, 'password': password})
        })
        .then(response => response.json()) 
        .then(response => {
            if (response.Authenticated) {
                console.log("good login")
                showMessage("Login Successful");
                localStorage.setItem("authenticated", "1")
                navigate("/Products")
            }
            else {
                console.log("bad login")
                showMessage("Login Unsuccessful");
                localStorage.setItem("authenticated", "0")
            }
        })
    }

    function loginValidate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (!username || !password) {
            showMessage("All fields are required");
            return false;
        }

        submitData(username, password)
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