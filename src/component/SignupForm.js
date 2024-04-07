import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import '../LoginForm.css';

function SignupForm() {
    const [userAlreadyExists, userAlreadyExistsUpdate] = useState(0)
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/login");
    }

    function submitData(username, password, email) {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': username, 'password': password, 'email': email})
        })
        .then(response => response.json()) 
        .then(response => {
            if (response.UserInDB) {
                console.log("yes user")
                userAlreadyExistsUpdate(1)
                showMessage("User Already Exists");
            }
            else {
                console.log("no user")
                userAlreadyExistsUpdate(0)
                showMessage("User Signup successful!");
            }
        })
    }

    async function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var email = document.getElementById("email").value;
        var message = "";

        if (!username || !password || !confirmPassword || !email) {
            showMessage("All fields are required");
            return false;
        }

        if (password !== confirmPassword) {
            message += "Passwords do not match.\n";
        }

        if (!isValidEmail(email)) {
            message += "Invalid email address.\n";
        }

        if (message !== "") {
            showMessage(message);
            return false;
        }
        
        console.log(username, password, email)
        let backendDupeTest = await submitData(username, password, email)
        console.log(backendDupeTest + "79") 

        }

    function isValidEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showMessage(message) {
    var messageBox = document.getElementById("message-signup"); // Updated to target the correct element
    messageBox.innerHTML = message.replace(/\n/g, "<br>");
    }

    console.log("current" + userAlreadyExists)
    if (userAlreadyExists) {
        console.log("1")
    }
    if (!userAlreadyExists) {
        console.log("2")
    }

    return (
        <div>
            <Header />
            <p id="message-signup"></p>
            <section class="signup-form">
                <form action="#">
                    <h1> Signup </h1>
                    <label for="username">Username: </label>
                    <input id="username" name="username" type="text" placeholder="Enter your username" required/> <br />
                    <label for="password">Password: </label>
                    <input id="password" name="password" type="password" placeholder="Enter your password" required/> <br />
                    <label for="confirm-password">Confirm Password: </label>
                    <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm your password" required/> <br />
                    <label for="email">Email: </label>
                    <input id="email" name="email" type="text" placeholder="Enter your email" required/> <br />
                    <button type="button" onClick={validateForm}>Signup</button> <br />
                    <button type="button" onClick={handleButtonClick}>Switch to Login</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default SignupForm;