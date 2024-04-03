import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/login");
    }

    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        var email = document.getElementById("email").value;
        var message = "";

        if (!isValidUsername(username)) {
            message += "Invalid username.\n";
        }

        if (!isValidPassword(password)) {
            message += "Invalid password.\n";
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

        showMessage("User Signup successful!");
        return true;
        }

        function isValidUsername(username) {
            var regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
            return regex.test(username);
        }

        function isValidPassword(password) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()\-_=+[{\]}|;:'",.<>?`~])[A-Za-z\d@$!%*?&()\-_=+[{\]}|;:'",.<>?`~]{8,}$/;
            return regex.test(password);
        }

        function isValidEmail(email) {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        function showMessage(message) {
        var messageBox = document.getElementById("message-signup"); // Updated to target the correct element
        messageBox.innerHTML = message.replace(/\n/g, "<br>");
        }

    return (
        <div>
            <Header />
            <form onSubmit= {validateForm}>
                <h1> Signup </h1>
                <label for="username">Username: </label>
                <input id="username" name="username" type="text" placeholder="Enter your username" required/> <br />
                <label for="password">Password: </label>
                <input id="password" name="password" type="password" placeholder="Enter your password" required/> <br />
                <label for="confirm-password">Confirm Password: </label>
                <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm your password" required/> <br />
                <label for="email">Email: </label>
                <input id="email" name="email" type="text" placeholder="Enter your email" required/> <br />
                <button type="submit">Signup</button> <br />
                <button type="button" onClick={handleButtonClick}>Switch to Login</button>
            </form>
            <p id="message-signup"></p>
            <Footer />
        </div>
    );
}

export default SignupForm;